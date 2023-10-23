import { backendServer } from "../../App";
import { minIOServer } from "../../App";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Loader } from "../Loader";
import { useTranslation } from 'react-i18next';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function Management() {

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
                        <div class="-size-xl py-2"><b>Tabla de datos</b></div>

                        <ul style={{ display: "flex", margin: "0" }}>
                            <li className="a-option-bar__item">
                                <Link to="/Management-Module">
                                    <input type="radio" id="2-1" name="demo" />
                                    <label className="a-option-bar__option" htmlFor="2-1" tabIndex="0">
                                        <i className=" bg-bosch-blue-50 a-icon a-option-bar__icon boschicon-bosch-ic-list-view" style={{ color: 'white' }} title="Tabla de datos"></i>
                                    </label>
                                </Link>
                            </li>
                            <li className="a-option-bar__item">
                                <Link to="/Management-Module-Calendar-View">
                                    <input type="radio" id="2-2" name="demo" />
                                    <label className="a-option-bar__option" htmlFor="2-2" tabIndex="0">
                                        <i className="a-icon a-option-bar__icon boschicon-bosch-ic-calendar-view" title="Lorem Ipsum"></i>
                                    </label>
                                </Link>
                            </li>
                            <li className="a-option-bar__item">

                                <input type="radio" id="2-3" name="demo" />
                                <label className="a-option-bar__option" htmlFor="2-3" tabIndex="0">
                                    <i className="a-icon a-option-bar__icon boschicon-bosch-ic-alert-info" title="Lorem Ipsum"></i>
                                </label>
                            </li>
                        </ul>
                    </div>

                </Card.Header>

                <div className="a-divider m-0"></div>

                <Card.Body className="py-8 px-8">

                    <table class="m-table" aria-label="Highlights">
                        <thead>
                            <tr>
                                <th>No. Tarjeta</th>
                                <th>Fecha de registro</th>
                                <th>Week registro</th>
                                <th>Hora preparación Inicial</th>
                                <th>Hora preparación Terminado</th>
                                <th>Status Preparado</th>
                                <th>Tipo Envío</th>
                                <th>Destino</th>
                                <th>Fecha de envío</th>
                                <th>Week Envío</th>
                                <th>Dock</th>
                                <th>No. de pallets</th>
                                <th>No. de TR</th>
                                <th>Hora de envío Planeada</th>
                                <th>Hora de envío Real</th>
                                <th>Status Envío</th>
                                <th>Desplegar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>855</td>
                                <td>10/20/2023</td>
                                <td>10</td>
                                <td>10:00</td>
                                <td>12:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-1"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label style={{ padding: "0", margin: "0" }} for="checkbox-1"></label>
                                    </div>
                                </td>
                                <td>NO_PLAN</td>
                                <td>Breda</td>
                                <td>10/18/23</td>
                                <td>42</td>
                                <td>9</td>
                                <td>39</td>
                                <td>NYKU 479044-8</td>
                                <td>14:00</td>
                                <td>16:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-1"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label style={{ padding: "0", margin: "0" }} for="checkbox-1"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    {/* <Link to="/">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>854</td>
                                <td>10/20/2023</td>
                                <td>10</td>
                                <td>09:00</td>
                                <td>11:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-1"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label style={{ padding: "0", margin: "0" }} for="checkbox-1"></label>
                                    </div>
                                </td>
                                <td>NO_PLAN</td>
                                <td>West Memphis</td>
                                <td>10/18/23</td>
                                <td>42</td>
                                <td>9</td>
                                <td>60</td>
                                <td>XPOU 413097</td>
                                <td>13:00</td>
                                <td>15:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-1"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label style={{ padding: "0", margin: "0" }} for="checkbox-1"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    {/* <Link to="/">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>853</td>
                                <td>10/17/2023</td>
                                <td>10</td>
                                <td>08:00</td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-2" name="unselected checkbox" />
                                        <label for="checkbox-2"></label>
                                    </div>
                                </td>
                                <td>INT_LCL</td>
                                <td>Varios</td>
                                <td>10/20/23</td>
                                <td>42</td>
                                <td>9</td>
                                <td>-</td>
                                <td>-</td>
                                <td>12:00</td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-3" name="unselected checkbox" />
                                        <label for="checkbox-3"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    <Link to="/Management-Module-Dock10">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>852</td>
                                <td>10/17/2023</td>
                                <td>10</td>
                                <td>07:00</td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-4" name="unselected checkbox" />
                                        <label for="checkbox-4"></label>
                                    </div>
                                </td>
                                <td>WM_TRUCK
                                </td>
                                <td>West Memphis
                                </td>
                                <td>10/20/23
                                </td>
                                <td>42</td>
                                <td>9</td>
                                <td>-</td>
                                <td>-</td>
                                <td>11:00</td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-5" name="unselected checkbox" />
                                        <label for="checkbox-5"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    <Link to="/Management-Module-Dock9">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>851</td>
                                <td>10/17/2023
                                </td>
                                <td>10</td>
                                <td>06:00</td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-6" name="unselected checkbox" />
                                        <label for="checkbox-6"></label>
                                    </div>
                                </td>
                                <td>WM_RAIL
                                </td>
                                <td>West Memphis
                                </td>
                                <td>10/20/23
                                </td>
                                <td>42</td>
                                <td>9</td>
                                <td>-</td>
                                <td>-</td>
                                <td>10:00</td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-7" name="unselected checkbox" />
                                        <label for="checkbox-7"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    <Link to="/Management-Module-Dock8">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>850</td>
                                <td>10/17/2023
                                </td>
                                <td>10</td>
                                <td>05:00
                                </td>
                                <td>-</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-8" name="unselected checkbox" />
                                        <label for="checkbox-8"></label>
                                    </div>
                                </td>
                                <td>WM_RAIL
                                </td>
                                <td>West Memphis
                                </td>
                                <td>10/20/23
                                </td>
                                <td>42</td>
                                <td>9</td>
                                <td>-</td>
                                <td>-</td>
                                <td>09:00</td>
                                <td></td>
                                <td>
                                    <div class="a-checkbox">
                                        <input type="checkbox" id="checkbox-9" name="unselected checkbox" />
                                        <label for="checkbox-9"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    <Link to="/Management-Module-Dock7">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>849</td>
                                <td>10/17/2023
                                </td>
                                <td>10</td>
                                <td>09:00
                                </td>
                                <td>12:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-10"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-10"></label>
                                    </div>
                                </td>
                                <td>INT_FCL
                                </td>
                                <td>Chile
                                </td>
                                <td>10/19/23</td>
                                <td>42</td>
                                <td>9</td>
                                <td>29</td>
                                <td>TCNU 524889-1
                                </td>
                                <td>13:00</td>
                                <td>15:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-10"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-10"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    {/* <Link to="/">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>848</td>
                                <td>10/17/2023</td>
                                <td>10</td>
                                <td>08:00</td>
                                <td>11:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-11"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-11"></label>
                                    </div>
                                </td>
                                <td>INT_LCL</td>
                                <td>Varios</td>
                                <td>10/19/23</td>
                                <td>42</td>
                                <td>9</td>
                                <td>5</td>
                                <td>TR 389
                                </td>
                                <td>12:00</td>
                                <td>14:00</td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-11"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-11"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    {/* <Link to="/">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>847</td>
                                <td>10/17/2023
                                </td>
                                <td>10</td>
                                <td>07:00
                                </td>
                                <td>09:00
                                </td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-12"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-12"></label>
                                    </div>
                                </td>
                                <td>WM_RAIL
                                </td>
                                <td>West Memphis
                                </td>
                                <td>10/19/23
                                </td>
                                <td>42</td>
                                <td>9</td>
                                <td>60
                                </td>
                                <td>STTU 432110
                                </td>
                                <td>11:00
                                </td>
                                <td>12:00
                                </td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-13"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-13"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    {/* <Link to="/">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link> */}
                                </td>
                            </tr>
                            <tr>
                                <td>846</td>
                                <td>10/17/2023
                                </td>
                                <td>10</td>
                                <td>08:00
                                </td>
                                <td>11:00
                                </td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-14"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-14"></label>
                                    </div>
                                </td>
                                <td>INT_LCL
                                </td>
                                <td>Varios
                                </td>
                                <td>10/18/23
                                </td>
                                <td>42</td>
                                <td>9</td>
                                <td>1
                                </td>
                                <td>TR 389
                                </td>
                                <td>12:00
                                </td>
                                <td>13:00
                                </td>
                                <td>
                                    <div class="a-checkbox">
                                        <input
                                            type="checkbox"
                                            id="checkbox-15"
                                            disabled="true"
                                            name="selected checkbox disabled"
                                            checked="true"
                                        />
                                        <label for="checkbox-15"></label>
                                    </div>
                                </td>
                                <td class="-with-icon">
                                    {/* <Link to="/">
                                        <span>Link</span>
                                        <i class="a-icon ui-ic-right-bold-small" title="right-bold-small"></i>
                                    </Link> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card >
        </>
    )
}

export { Management };
