import React from 'react';
import {translationLang} from "../../utils"
import {langObj} from "./lang/lang.js"
import './index.scss';

interface DisclaimerProps{
  a: string
}
const Disclaimer = ({a}: DisclaimerProps) => {
  const preLang = ["en", "cn", "tw", "br", "de", "es", "id", "pt", "ru", "th", "tr", "uk", "vn", "ja", "ar", "fr"]
  const translate = new translationLang(langObj,preLang)
  const lang_string = translate.lang_string.bind(translate)
  const lang_string_node = translate.lang_string_node.bind(translate)

  return (
      <div className="disclaimer-wrapper">
          <h5 className='disclaimer-title'>{lang_string("24/7/365 Customer Support")}</h5>
          <p className='disclaimer-des'>{lang_string("Should you require assistance related to Gate.io products and services, please reach out to the Customer Support Team as below.")}</p>
          <div className='disclaimer-contact-details'>
            <a className="disclaimer-contact-details-item" href="/groupchat/call_service?platform=web" target="_blank"
               data-click-event="cosmos_page_button_click"
               data-collect-params={`{"button_name": "在线聊天；"} {"module_name":"link"}`}>{lang_string("Live Chat")}</a>｜
            <a className="disclaimer-contact-details-item" href="mailto:support@mail.gate.io" target="_blank"
               data-click-event="cosmos_page_button_click"
               data-collect-params={`{"button_name": "电子邮箱；"} {"module_name":"link"}`}>{lang_string("E-mail")}</a>｜
            <a className="disclaimer-contact-details-item" href="https://support.gate.io/hc/en-us/requests/new" target="_blank"
               data-click-event="cosmos_page_button_click"
               data-collect-params={`{"button_name": "提交工单；"} {"module_name":"link"}`}>{lang_string("Submit a Ticket")}</a>
          </div>
          <h6 className='disclaimer-title'>{lang_string("Disclaimer")}</h6>
          <p className='disclaimer-des-sm'>{lang_string_node(`Further, take note that Gate.io may not be able to provide full service in certain markets and jurisdictions, including but not limited to the United States of America, Canada, Iran and Cuba. For more information on Restricted Locations, please refer to <a href="https://www.gate.io/user-agreement" target="_blank">Section 2.3(d) of the User Agreement</a>.`)}</p>
        {
            !window.uid &&
            <div
                className='disclaimer-create-account'
            >
              <p className='disclaimer-create-account-title'>{lang_string("Start Now")}</p>
              <p>{lang_string_node(`Sign up and get a <span>$100</span> Voucher!`)}</p>
              <a className='disclaimer-create-account-button' href="/signup" target="_blank"
                 data-click-event="cosmos_page_button_click"
                 data-collect-params={`{"button_name": "创建账户"} {"module_name":"mainpage"}`}>{lang_string("Create Account")}</a>
            </div>
        }
      </div>
  )
}
export default Disclaimer;
