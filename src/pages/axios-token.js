import axios from 'axios';

// axios instance for making requests 
const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(function (config) {
//     //const token = getCookie("accessToken");
//     config.headers.Authorization =  'Bearer ' + localStorage.getItem('token');
//     console.log(localStorage.getItem('token'))
     
//     return config;
// });
if (
	import.meta.env.VITE_ENV === "production" ||
	import.meta.env.VITE_ENV === "shopfloor"
) {
	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		function (error) {
			const originalRequest = error.config;

			if (error.response.status === 401) {
				//replace alert with timeout that does not halt the operations
				alert(
					"Your session is no longer valid, you will be asked to sign in again."
				);
				LoginbyCode();
			}
			return Promise.reject(error);
		}
	);

	function LoginbyCode() {
		axios
			.get(import.meta.env.VITE_BACKEND_SERVER + "/land", {})
			.then(function (response) {
				response = response.data;
				// redirect to SSO window to initiate login process.
				window.location.href = response;
			})
			.catch(function (error) {
				console.log("Error: " + error);
			});
	}
}

export default axiosInstance;