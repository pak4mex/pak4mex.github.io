import { backendServer } from "../../App";
import { minIOServer } from "../../App";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Loader } from "../Loader";
import { useTranslation } from 'react-i18next';
import Card from "react-bootstrap/Card";
import Cronometro from "./Cronometro";

function Dock6() {

    const { t, i18n } = useTranslation()
    const baseURL = useContext(backendServer);
    const minIOURL = useContext(minIOServer);

    const [loading, setLoading] = useState(false)
    const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const horaInterval = setInterval(() => {
            setHoraActual(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(horaInterval);
        };
    }, []);

    return (
        <>
            {loading && <Loader />}

            <Card className="p-0" variant="primary" style={{ borderRadius: "0px", border: "0px" }}>
                <Card.Header className="bg-white p-0 m-0" style={{ borderBottom: 0 }}>
                    <ul class="flex-container-Dock">
                        <li class="flex-item-head">
                            <img
                                src="src/pages/Dock10/DockImg1.png"
                                alt="C1"
                                style={{ maxWidth: '100%', height: '100%' }}
                            />
                        </li>
                        <li class="flex-item-head">
                            <img
                                src="src/pages/Dock10/Dockimg2.png"
                                alt="C1"
                                style={{ maxWidth: '100%', height: '100%' }}
                            />
                        </li>
                        <li class="flex-item-head">
                            <img
                                src="src/pages/Dock10/DockImg3.png"
                                alt="C1"
                                style={{ maxWidth: '100%', height: '100%' }}
                            />
                        </li>
                        <li style={{ color: "black" }} class="flex-item-head -size-6xl">
                            <b>Time</b>
                            <Cronometro />
                        </li>
                    </ul>
                </Card.Header>

                <div className="a-divider"></div>

                <Card.Body>
                    <ul class="flex-container-Dock">
                        <li class="flex-item-body -size-6xl" style={{ color: "black" }}>
                            {/* Destination: */}
                            <img
                                src="src/pages/Dock10/DockImg5.png"
                                alt="C1"
                            // style={{ maxWidth: '100%', height: '100%' }}
                            />
                        </li>
                        <li class="flex-item-body -size-6xl" style={{ color: "black" }}>
                            {/* Destination: */}
                            <img
                                src="src/pages/Dock10/DockImg6.png"
                                alt="C1"
                            // style={{ maxWidth: '100%', height: '100%' }}
                            />
                        </li>
                    </ul>
                </Card.Body>

                <div className="a-divider"></div>

                <Card.Footer>
                    <ul class="flex-container-Dock">
                        <li class="flex-item-foot">
                            <div class="-size-6xl"><b>Container#:</b></div>
                            <div class="-size-6xl">XPOU 413097</div>
                        </li>
                        <li class="flex-item-foot">
                            <div class="-size-6xl"><b>Pallets#:</b></div>
                            <div class="-size-6xl">60</div>
                        </li>
                        <li class="flex-item-foot">
                            <div className="-size-6xl"><b>{horaActual}</b></div>
                            <div className="-size-6xl"><b>{new Date().toLocaleDateString()}</b></div>
                        </li>
                    </ul>
                </Card.Footer>
            </Card>
        </>
    )
}

export { Dock6 };
