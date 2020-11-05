import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
          //src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          src="https://psv4.userapi.com/c856324/u170724277/docs/d15/462ca3f39380/logoza_ru_2.png?extra=rEX8d_ed-WtKZNrN2S7-CUN3isIF1dqEpdAGe-86syLaFYPfViB5vmLQs8f_hKw7fc2m7_g6uLuXJMYNtK-dtIg10khFx_pgfLvEOITb28aNoV3uS_FbLd-UkQ5ZRv1LXibJ2dQ_jS5lX4Hu73SI5sM"
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
