import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
        <img 
            className = "header_icon"
            //src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            src="https://psv4.userapi.com/c856432/u170724277/docs/d7/9760942937cd/AdConnect.png?extra=Yaqp-WrKy4StchJ1iEjGruzMixJZBJuQ4Ud0wuSoPIZtnejWA4JWmQN6T5XXGoDxQSbFtQXwHCBi-npkkOsclSqjDa4vFJbD5Qr9wu5wTLfz55LVtcho8CNA6zqjHxJBCMDwkiDCg97llRLe8orrQIel9w"
            alt=""
        />

        <div className='header_center'>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>

    </div>
  );
}

export default Header