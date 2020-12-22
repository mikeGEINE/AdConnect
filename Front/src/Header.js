import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import adconnect from './Image/adconnect.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <img 
          className = "header_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
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