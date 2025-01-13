import React from 'react';
import '../../styles/components/cover.css';
import imgCover from '../../assets/images/cover.webp';
import scrollDown from '../../assets/images/scrollDown.svg'


function Cover() {
    return (
        <div className='cover'>
            <div className='cover_wrapper'>
                <h1 className='cover_name'>MoreShine</h1>
                <p className='cover_subtitle'>Ваши уникальные украшения ручной работы</p>
                <a href="#order" className='order'> <span>Оформить заказ</span> </a>
            </div>
            <a href='#aboutBrand' className='scrollDown'>
                <p>Больше <br/> о MoreShine</p>
                <img src={scrollDown} alt="scrollDown" />
            </a>
        </div>
    );
}

export default Cover;
