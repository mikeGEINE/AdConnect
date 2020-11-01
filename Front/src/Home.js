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
          src="https://cs4.pikabu.ru/post_img/big/2015/04/18/7/1429355680_1135646322.jpg"
          title="Online Experiance"
          description="Hello world"
          />
          <Card 
          src="https://cs4.pikabu.ru/post_img/big/2015/04/18/7/1429355680_1135646322.jpg"
          title="Online Experiance"
          description="Hello world"
          />
          <Card
          src="https://avatars.mds.yandex.net/get-zen_doc/1856484/pub_5dd240f4f2583c491d72fc39_5dd2416a08ffd321245c4749/scale_1200" 
          title="Online Experiance"
          description="Hello world"
          />
      </div>
      <div className='home__section'>
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  );
}

export default Home