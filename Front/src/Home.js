import React from 'react';
import './Home.css';
import './Banner.css';
import Banner from './Banner'
import Card from './Card'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Platforms from './Platforms' 

function Home() {
  return (
    <div className="home">
      <Banner />
      <a href="/platforms">Посмотреть все</a>
      <div className='home__section'>
        <Card
          src="https://mtdata.ru/u17/photoE33B/20828528477-0/original.jpg"
          title="Tik Tok"
          description="Сервис для создания и просмотра коротких видео."
          price="10000$"
        />
        <Card
          src="https://i.vimeocdn.com/video/741211597_1280x720.jpg"
          title="Skyeng"
          description="Российская онлайн-школа по изучению английского языка."
          price="200$"
        />
        <Card
          src="https://www.sostav.ru/images/news/2018/09/20/4ywdz7bp.jpg"
          title="Dog & Man "
          description="Полезный корм для вашего питомца"
          price="100$"
        />
      </div>
      <div className='home__section'>
      <Card
        src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240.."
        title="Online Experiance"
        description="Hello world"
      />
      <Card
        src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240.."
        title="Online Experiance"
        description="Hello world"
      />
      <Card
        src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240.."
        title="Online Experiance"
        description="Hello world"
      />
      </div>
      <Router>
        <Route exact path="/platforms" component={Platforms} />
      </Router>
  </div>
  );
}

export default Home