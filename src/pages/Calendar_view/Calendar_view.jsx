import { backendServer } from "../../App";
import { minIOServer } from "../../App";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Loader } from "../Loader";
import { useTranslation } from 'react-i18next';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function Calendar_view() {

    const { t, i18n } = useTranslation()
    const baseURL = useContext(backendServer);
    const minIOURL = useContext(minIOServer);

    const [loading, setLoading] = useState(false)

    return (
        <>
            {loading && <Loader />}

            <Card variant="primary" style={{ borderRadius: "0px", border: "0px" }}>

                <Card.Header className="bg-white p-0 m-0" style={{ border: 0 }}>

                    <div className="a-option-bar" style={{ display: "flex", flexFlow: "row", justifyContent: "space-between", padding: "0rem 0rem 0rem 2rem" }}>
                        <div class="-size-xl py-2"><b>Vista de calendario</b></div>

                        <ul style={{ display: "flex", margin: "0" }}>
                            <li className="a-option-bar__item">
                                <Link to="/Management-Module">
                                    <input type="radio" id="2-1" name="demo" />
                                    <label className="a-option-bar__option" htmlFor="2-1" tabIndex="0">
                                        <i className="a-icon a-option-bar__icon boschicon-bosch-ic-emoji-happy" title="Lorem Ipsum"></i>
                                    </label>
                                </Link>
                            </li>

                            <li className="a-option-bar__item">
                                <Link to="/Management-Module-Calendar-View">
                                    <input type="radio" id="2-2" name="demo" />
                                    <label className="a-option-bar__option" htmlFor="2-2" tabIndex="0">
                                        <i className=" bg-bosch-blue-50 a-icon a-option-bar__icon boschicon-bosch-ic-emoji-happy" style={{ color: 'white' }} title="Tabla de datos"></i>
                                    </label>
                                </Link>
                            </li>

                            <li className="a-option-bar__item">
                                <input type="radio" id="2-3" name="demo" />
                                <label className="a-option-bar__option" htmlFor="2-3" tabIndex="0">
                                    <i className="a-icon a-option-bar__icon boschicon-bosch-ic-emoji-happy" title="Lorem Ipsum"></i>
                                </label>
                            </li>
                        </ul>
                    </div>

                </Card.Header>
                <div className="a-divider m-0"></div>
                <Card.Body>

                </Card.Body>
            </Card >
        </>
    )
}

export { Calendar_view };
