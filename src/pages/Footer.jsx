import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        // <div className="c-footer">
            <div className="o-footer -minimal ">
                {/*<div style="width: 100%;">*/}
                <div style={{width: "100%"}}>
                    <hr className="a-divider" style={{ margin: 0 }} />
                    {/* <hr className="a-divider" /> */}
                    <div className="e-container">
                        <div className="o-footer__bottom">
                            <ul className="o-footer__links flex flex-row">
                                <li>
                                    <div className="a-link a-link--simple">
                                        <a aria-label="Open undefined Imprint" href="/html/Corporate_Information.html?Tab=1"
                                            target="_self" data-key="CorporateInformation">
                                            {t('CorporateInformation')}
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="a-link a-link--simple">
                                        <a aria-label="Open undefined Legal information"
                                            href="/html/Corporate_Information.html?Tab=2" target="_self" data-key="LegalNotice">
                                            {t('LegalNotice')}
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="a-link a-link--simple">
                                        <a aria-label="Open undefined Data privacy" href="/html/Corporate_Information.html?Tab=3"
                                            target="_self" data-key="DataProtectionPolicy">
                                            {t('DataProtectionPolicy')}
                                        </a>
                                    </div>
                                </li>
                                {/* <li>
                          <div className="a-link a-link--simple">
                              <a aria-label="Open undefined Disclosure documents" href="" target="_self">
                                  Privacy settings
                              </a>
                          </div>
                        </li>*/}
                            </ul>
                            <hr className="a-divider" />
                            <div className="o-footer__copyright">
                                <i className="a-icon boschicon-bosch-ic-copyright-frame" title="CR"></i>
                                <div data-key="RightsReserved">Robert Bosch GmbH 2022, all rights reserved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Footer