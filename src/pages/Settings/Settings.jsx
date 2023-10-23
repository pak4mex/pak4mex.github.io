import { backendServer } from "../../App";
import { minIOServer } from "../../App";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Loader } from "../Loader";
import { useTranslation } from 'react-i18next';
import Card from "react-bootstrap/Card";

function Settings() {

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
                <Card.Header className="bg-white p-1" style={{ borderBottom: 0 }}>
                    <div style={{ padding: "1rem 2rem 0rem" }}>
                        <h4>Configuración</h4>
                    </div>
                </Card.Header>
                <div className="a-divider"></div>
                <Card.Body>

                </Card.Body>
            </Card>
        </>
    )
}

export { Settings };
