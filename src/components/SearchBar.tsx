import React from 'react'
import BackIcon from '../images/back.svg';
import SearchIcon from '../images/search-icon.svg';

type Props = {
    callback: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({callback}) => {
    return (
        <section className="ui container">
            <div className="search-bar__details">
                <a href="#home" className="search-bar__details-back-link">
                    <img className="search-bar__details-back-icon" alt="McMakler Logo" src={BackIcon}/>
                </a>
                <h3 className="search-bar__title">Applicants</h3>
                <ul className="search-bar__details-list">
                    <li className="search-bar__details-list-item">
                        <span className="search-bar__details-list-number">25</span>
                        <span className="search-bar__details-list-text">total</span>
                    </li>
                    <li className="search-bar__details-list-item">
                        <span className="search-bar__details-list-number">10</span>
                        <span className="search-bar__details-list-text">New</span>
                    </li>
                    <li className="search-bar__details-list-item">
                        <span className="search-bar__details-list-number">5</span>
                        <span className="search-bar__details-list-text">Viewed</span>
                    </li>
                    <li className="search-bar__details-list-item">
                        <span className="search-bar__details-list-number">3</span>
                        <span className="search-bar__details-list-text">Appointment</span>
                    </li>
                    <li className="search-bar__details-list-item">
                        <span className="search-bar__details-list-number">6</span>
                        <span className="search-bar__details-list-text">Others</span>
                    </li>
                </ul>
            </div>
            <div className="search-bar__input-fields">
                <div className="search-bar__search-container">
                    <div className="search-bar__search-input ui icon input">
                        <input
                            className="ui loading search"
                            type="text"
                            placeholder="Search"
                            onKeyDown={callback}
                        />
                        <img className="search-bar__search-icon" alt="Search" src={SearchIcon}/>
                    </div>
                </div>
                <div className="search-bar__dropdown-container">
                    <div className="search-bar__dropdown-input ui horizontal menu">
                        <div className="ui dropdown input item">
                            <span className="search-bar__dropdown-text">bid</span>
                            <i className="search-bar__dropdown-icon dropdown icon"></i>
                        </div>
                    </div>
                
                
                    <div className="search-bar__dropdown-input ui horizontal menu">
                        <div className="ui dropdown input item">
                            <span className="search-bar__dropdown-text">Status</span>
                            <i className="search-bar__dropdown-icon dropdown icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
      );
}

export default SearchBar;
