import { backendServer } from "../../App";
import { minIOServer } from "../../App";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Loader } from "../Loader";
import { useTranslation } from 'react-i18next';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function Overview() {

    const { t, i18n } = useTranslation()
    const baseURL = useContext(backendServer);
    const minIOURL = useContext(minIOServer);

    const [loading, setLoading] = useState(false)

    useEffect(() => {

    }, []);

    return (
        <>
            {loading && <Loader />}

            <Card variant="primary" style={{ borderRadius: "0px", border: "0px" }}>

                {/*<Card.Header className="bg-white p-1" style={{ borderBottom: 0 }}>
                    <div style={{ padding: "1rem 2rem 0rem" }}>
                        <h4>Overview</h4>
                    </div>
                </Card.Header>

                <div className="a-divider"></div> */}

                <Card.Body className="bg-white p-0" style={{ border: 0 }}>

                    <div style={{ padding: "2rem 0rem 0rem 0rem", position: 'relative' }}>
                        <img style={{ position: "absolute", top: 0, right: 0 }} src="src/pages/Overview/Overview_img1_crop.png" alt="Services" />

                        <div className="bg-bosch-blue-50" style={{ color: 'white', margin: '0rem', padding: '2.1rem 2.5rem' }}>
                            <div style={{ padding: '0rem', margin: '0rem' }}>
                                <div class="-size-xl">Welcome to the</div>
                            </div>
                            <div class="-size-3xl" style={{ fontWeight: 500 }}>Shipping Docks Management System</div>
                        </div>

                        <div className="bg-white" style={{ color: 'black', padding: '2.1rem 2.5rem' }}>
                            <div class="text">Digitalization is key in the manufacturing environment of today. The growth of connected peopleand objects is transformming our private</div>
                            <div class="text">and professional lives. This is also having a fundamental impact on value creation in manufacturing.</div>

                            <div class="text" style={{ padding: '1.5rem 0rem 0rem 0rem' }}>Shipping Docks Management System, SDMS for short, has the purpose of providing tools that can help to measure productivity in Real Time.</div>
                            <div class="text">By providing user friendly modules. the platform allows continuous upload of data and approval of movements that is instanly</div>
                            <div class="text">updated in a connected manufacturing landscape.</div>

                        </div>
                    </div>

                    <div className="bg-bosch-gray-95">
                        <ul className="flex-container">
                            <li className="flex-item">
                                <Link to="/Management-Module">
                                    <img
                                        src="src/pages/Overview/Overview_management_module.webp"
                                        alt="Module1"
                                        style={{ maxWidth: '100%', height: '100%' }}
                                    />
                                </Link>
                            </li>
                            <li className="flex-item">
                                <Link to="/Reports_Submenu/Reports-Module">
                                    <img
                                        src="src/pages/Overview/Overview_report_module.jpg"
                                        alt="Imagen 2"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </Link>
                            </li>
                            <li className="flex-item">
                                <Link to="/Settings-Module">
                                    <img
                                        src="src/pages/Overview/imagen-3.jpg"
                                        alt="Imagen 3"
                                        style={{ maxWidth: '100%' }}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </Card.Body>
            </Card >
        </>
    )
}

export { Overview };
