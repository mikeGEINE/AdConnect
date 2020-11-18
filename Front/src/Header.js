import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import adconnect from './Image/adconnect.png'

function Header() {
  return (
    <div className="header">
      <img 
          className = "header_icon"
          //src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          src={adconnect} alt={"adconnect"}
      />
      
      <div className='header_right'>
        <div className={classes.root}>
          <Button color="primary" variant="outlined">Регистрация</Button>
        </div> 
        <div className={classes.root}>
          <Button color="primary" variant="outlined">Вход</Button>
        </div>
      </div>

    </div>
  );
}

export default Header