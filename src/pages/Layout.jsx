import Footer from "./Footer";
import React, { useContext } from "react";
import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { UserContext, NameContext } from "../App";
import { SideNavigation } from "../frontend-kit";
import Logo from "../frontend-kit/organisms/header/parts/logo";
import BoschSuperGraphic from "../frontend-kit/organisms/header/parts/Bosch-Supergraphic_RGB.svg";
import { useTranslation } from 'react-i18next';

const Layout = () => {
	const { t, i18n } = useTranslation();
	const username = useContext(UserContext) || 'PAK4MEX';
	const name = useContext(NameContext) || 'EXTERNAL Palacios Kevin (UABC, MexP/LOG)'; 

	// const isOpen = useContext(sidebarOpen)
	const [isOpen, setIsOpen] = useState(false)

	const menu = {
		appName: import.meta.env.VITE_APP_NAME,
		menuItems: [
			{
				label: "Vista general",
				url: "/",
				icon: "a-icon boschicon-bosch-ic-grid-view",
			},
			{
				label: "Manejo de envíos",
				url: "/Management-Module",
				icon: "a-icon boschicon-bosch-ic-calendar-add",
			},
			{
				label: "Reportes",
				icon: "a-icon boschicon-bosch-ic-chart-bar",
				subItems: [
					{
						label: "Adherencia",
						url: "/Reports_Submenu/Reports-Module",
					}
				],
			},
			{
				label: "Example",
				icon: "a-icon boschicon-bosch-ic-alert-info",
				subItems: [
					{
						label: "Example",
						url: "/Example_Submenu/Example-Module",
					}
				],
			},
			{
				label: "Configuración",
				url: "/Settings-Module",
				icon: "a-icon boschicon-bosch-ic-settings",
			}
		],
	};

	return (
		<div>
			<div style={{ position: "fixed", zIndex: "99", top: "0.5rem" }}>

				<SideNavigation {...menu} isOpen={isOpen} setIsOpen={setIsOpen} />

				{console.log(isOpen)}
			</div>
			<div className="sticky-header" style={{ zIndex: "100", left: -1, right: -1 }}>
				<img className="w-full h-2 object-cover" src={BoschSuperGraphic} />
			</div>
			<div
				className="o-minimal-header__top N-nav sticky-header"
				style={{
					backgroundColor: "#f8f9fa",
					marginLeft: "0",
					marginRight: "0",
					marginTop: "0.5rem",
				}}>
				<div className={`o-minimal-header__title ${isOpen ? "translate-x-[17rem] duration-300" : "duration-300"} `} style={{ marginLeft: "5rem", position: "relative" }}>
					<h5>
						<b>{t('Hello') + name + "!"}</b>
					</h5>
				</div>
				<ul
					className="o-minimal-header__actions"
					style={{ marginTop: "0.1rem" }}>
					<li>
						<button
							type="button"
							className="a-button a-button--integrated -without-label"
							style={{ alignItems: "center" }}>
							<i className="a-icon a-button__icon boschicon-bosch-ic-customer" />
							<b className="N-username" style={{ paddingRight: "1rem" }}>
								{username}
							</b>
						</button>
					</li>
				</ul>
				<div
					className="o-minimal-header__logo"
					style={{ marginRight: "3rem", marginTop: "-2.5rem" }}>
					<Logo />
				</div>
			</div>
			<div className={`${isOpen ? "translate-x-[17rem] duration-300" : "duration-300"}`} style={{ marginLeft: "3rem", marginTop: "3.5rem", minHeight: "90vh" }} onClick={() => { isOpen && setIsOpen(false) }}>
				<div
					className="w-full h-full bg-bosch-gray-95 p-8"
					style={{ minHeight: "90vh" }}>
					<Outlet />
				</div>
			</div>
			<div style={{ position: "relative" }}>
				<Footer />
			</div>
		</div>
	);
};

export { Layout };
