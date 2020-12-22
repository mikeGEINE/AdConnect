import React from 'react';
import './Home.css';
import './Banner.css';
import Banner from './Banner'
import Card from './Card'


function Home() {
  return (
    <div className="home">
        <Banner />
        <a href="/ads">Посмотреть все</a>
        <div className='home__section'>
            <Card 
            id = {1}
            src="https://mtdata.ru/u17/photoE33B/20828528477-0/original.jpg"
            title='Tik Tok'
            description="Сервис для создания и просмотра коротких видео."
            price="10000$"
            />
            <Card 
            id = {2}
            src="https://i.vimeocdn.com/video/741211597_1280x720.jpg"
            title="Skyeng"
            description="Российская онлайн-школа по изучению английского языка."
            price="200$"
            />
            <Card
            id = {3}
            src="https://www.sostav.ru/images/news/2018/09/20/4ywdz7bp.jpg" 
            title="Dog & Man "
            description="Полезный корм для вашего питомца"
            price="100$"
            />
        </div>
        <a href="/platforms">Посмотреть все</a>
        <div className='home__section'>
            <Card 
            id = {4}
            src="https://i.ytimg.com/vi/kqf3JeTVwC0/maxresdefault.jpg" 
            title="Youtube"
            description="EeOneGuy	17.1 млн подписчиков"
            />
            <Card 
            id = {5}
            src="https://pbs.twimg.com/media/EI6oLOoUUAAyDVq.jpg" 
            title="Instagram"
            description="Мanzai 6 млн подписчиков"
            />
            <Card 
            id = {6}
            src="https://i.ytimg.com/vi/kqf3JeTVwC0/maxresdefault.jpg" 
            title="Youtube"
            description="ГЛЕНТ	5.9 млн подписчиков"
            />
        </div>
    </div>
  );
}

export default Home