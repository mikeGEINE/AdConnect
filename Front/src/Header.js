import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar } from "@material-ui/core";

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
            src="https://psv4.userapi.com/c856324/u170724277/docs/d15/b8d7b6779a71/logoza_ru_2.png?extra=N5dCd55QAS_3GZ7YOFryQeRgDayUPFRn5bxWFK8tPlOlTcswP_vScJfA36VdXdGiZx3RvXe_GL1d2Yr16tkogO8QGMt2dEPhImL9wKUBG68SmAooHxFxEbBn2a_LJNZh-BV4EHXd49pM4qh4P4i8gM8"
        />

        <div className='header_right'>
          <div className={classes.root}>
            <Button color="primary" variant="outlined">Регистрация</Button>
          </div>
          <div className={classes.root}>
            <Button color="primary" variant="outlined">Вход</Button>
          </div>
          {/* <Avatar /> */}
        </div>

    </div>
  );
}

export default Header
