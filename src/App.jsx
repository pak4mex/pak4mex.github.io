import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createContext, useState, useEffect, useLayoutEffect } from 'react'
import React from "react";
import axios from "axios";
import axiosToken from "./pages/axios-token";
import * as msal from '@azure/msal-browser'
import { useCookies } from "react-cookie";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
if (import.meta.env.VITE_ENV !== "shopfloor") {
	import('../node_modules/formBuilder/dist/form-builder.min.js');
	import('../node_modules/formBuilder/dist/form-render.min.js');
}


import {
	Overview,
	Layout,
	ExampleModule,
	Management,
	Dock10,
	Dock9,
	Dock8,
	Dock7,
	Dock6,
	Calendar_view,
	Reports,
	Settings,
} from './pages'

export const UserContext = createContext('')
export const NameContext = createContext('')
export const tokenContext = createContext('')
export const backendServer = createContext('');
export const minIOServer = createContext('')
export const rolesContext = createContext();

const App = () => {
	//Jira link test
	const [cookies, setCookies] = useCookies()
	const [user, setUser] = useState('');
	const [name, setName] = useState('');
	const [token, setToken] = useState('');
	const [roles, setRoles] = useState([]);

	//  setCookies('bosch_username', username.toUpperCase())
	const username = (new URLSearchParams(window.location.search)).get('Username')?.split('@')[0]

	function closeErrorPopup() {
		setErrorModal(false);
	}

	useEffect(() => {
		//    console.log(window.location.pathname)
		if (import.meta.env.VITE_ENV === "production") {
			var queryParameters = new URLSearchParams(window.location.search)

			if (localStorage.getItem('token') == undefined || localStorage.getItem('token') == 'undefined') {
				//attempt to validate login code in url params to fetch user data
				LoginRedirect(queryParameters)
			} else {
				//send api to backend with  localStorage.getItem('token')
				console.log("Fetch user valid roles with " + localStorage.getItem('token'))

				axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
				axiosToken.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

				axios.get(import.meta.env.VITE_BACKEND_SERVER + '/employeeRoles')
					.then(function (response) {
						response = response.data;
						console.log(response);
						console.log(response.authInfo.preferred_username)
						setToken(localStorage.getItem('token'));
						setUser(response.authInfo.preferred_username);
						setName(response.authInfo.name);
						setRoles(response.authInfo.roles);

						// redirect to SSO window to initiate login process.
						// window.location.href = response;
					})
					.catch(function (error) {
						console.log('Error: ' + error);

						console.log(queryParameters.get("code"))

						if (queryParameters.get("code") !== undefined) {
							//attempt to validate login code in url params to fetch user data
							LoginRedirect(queryParameters)
						}
					})

			}
		} else {
			setRoles('DPS_MEXP_SYS_ADMIN');
		}
	}, [])

	console.log(`Context created with user ${user}`)

	console.log(import.meta.env.VITE_BACKEND_SERVER)


	function LoginRedirect(queryParameters) {
		axios.get(import.meta.env.VITE_BACKEND_SERVER + '/redirect', {
			params: {
				code: queryParameters.get("code")
			}
		}).then(function (response) {
			//Code valid, fetch user data
			response = response.data;
			console.log(response)
			console.log("Response Token: " + response.accessToken)
			console.log("User Data: " + response.idTokenClaims)
			console.log(response.idTokenClaims)

			//Set context	
			localStorage.setItem('token', response.accessToken);
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
			axiosToken.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
			setToken(response.accessToken);
			setUser(response.idTokenClaims.preferred_username);
			setName(response.idTokenClaims.name);
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.accessToken;


		}).catch((err) => {
			console.log(queryParameters.get("code"))
			console.log(err)
			alert('Your session has expired, you will be asked to sign in again.');
			LoginbyCode();
		})
	}

	function LoginbyCode() {
		axios.get(import.meta.env.VITE_BACKEND_SERVER + '/land', {})
			.then(function (response) {
				response = response.data;
				// redirect to SSO window to initiate login process.
				window.location.href = response;
			})
			.catch(function (error) {
				console.log('Error: ' + error);
			})
	}

	return (
		<UserContext.Provider value={user}>
			<NameContext.Provider value={name}>
				<tokenContext.Provider value={token}>
					<backendServer.Provider value={import.meta.env.VITE_BACKEND_SERVER}>
						<minIOServer.Provider value={import.meta.env.VITE_MINIO_SERVER}>
							<rolesContext.Provider value={roles}>
								<BrowserRouter>
									<Routes>
										{(token !== '' || import.meta.env.VITE_ENV !== "production") && (
											<>
												<Route path="/" element={<Layout />}>

													<Route index element={<Overview />} />

													<Route path="Management-Module" element={<Management />} />

													<Route path="Management-Module-Dock10" element={<Dock10 />} />
													<Route path="Management-Module-Dock9" element={<Dock9 />} />
													<Route path="Management-Module-Dock8" element={<Dock8 />} />
													<Route path="Management-Module-Dock7" element={<Dock7 />} />
													<Route path="Management-Module-Dock6" element={<Dock6 />} />

													<Route path="Management-Module-Calendar-View" element={<Calendar_view />} />

													<Route path="Reports_Submenu">
														<Route path="Reports-Module" element={<Reports />} />
													</Route>

													<Route path="Example_Submenu">
														<Route path="Example-Module" element={<ExampleModule />} />
													</Route>

													<Route path="Settings-Module" element={<Settings />} />

												</Route>
											</>
										)}
									</Routes>

								</BrowserRouter>
							</rolesContext.Provider>
						</minIOServer.Provider>
					</backendServer.Provider>
				</tokenContext.Provider>
			</NameContext.Provider>
		</UserContext.Provider>
	);
}

export default App