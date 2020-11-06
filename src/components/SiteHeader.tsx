import React, { FC } from 'react';
import HeaderLogo from '../images/logo.svg';
import SupportIcon from '../images/support-icon.svg';
import ChatIcon from '../images/chat-icon.svg';
import AccountIcon from '../images/ic-user.svg';
import SwitchIcon from '../images/ic-power_settings_new.svg';

const SiteHeader: FC = () => {
    return (
        <header className="header">
          <div className="ui container">
            <div className="header__inner-container">
              
                <button className="header__burger-button">
                  <span className="header__burger-icon"></span>
                </button>
                <a href="https://www.mcmakler.de/" className="header__logo">
                  <img className="header__logo-image" alt="McMakler Logo" src={HeaderLogo}/>
                </a>
             
              <div className="header__right-col">
                <div className="header__contact-support">
                  <img className="header__contact-icon" alt="contact support" src={SupportIcon}/>
                  <span className="header__contact-text">Contact Support</span>
                </div>
                <div className="header__chat">
                  <img className="header__chat-icon" alt="help chat" src={ChatIcon}/>
                </div>
                <div className="header__account">
                  <img className="header__account-icon" alt="contact support" src={AccountIcon}/>
                </div>
                <div className="header__switch">
                  <img className="header__account-icon" alt="contact support" src={SwitchIcon}/>
                </div>
              </div>
            </div>
          </div>
      </header>
    )
}

export default SiteHeader