import React from 'react';
import './Home.css';
import './Banner.css';
import Banner from './Banner'
import Card from './Card'


function Home() {
  return (
    <div className="home">
        <Banner />
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
        <div className='home__section'>
            <Card 
            id = {4}
            src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240f4f2583c491d72fc39_5dd2416a08ffd321245c4749/scale_1200" 
            title="Online Experiance"
            description="Hello world"
            />
            <Card 
            id = {5}
            src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240f4f2583c491d72fc39_5dd2416a08ffd321245c4749/scale_1200" 
            title="Online Experiance"
            description="Hello world"
            />
            <Card 
            id = {6}
            src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240f4f2583c491d72fc39_5dd2416a08ffd321245c4749/scale_1200" 
            title="Online Experiance"
            description="Hello world"
            />
        </div>
    </div>
  );
}

export default Home