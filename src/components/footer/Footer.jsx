import React from 'react';
import logo from '../../assets/images/logo.svg';
import telegram from '../../assets/images/telegram.svg';
import whatsapp from '../../assets/images/whatsapp.svg';
import '../../styles/components/footer.css';

function Footer() {
    return (
        

        <footer className='footer'>
            <a href="#"><img className="logo" src={logo} alt="logo" /></a>
            <nav className="navMenu">
                <ul className="menu">
                    <li className="menu_item"><a href='#aboutBrand'>О брэнде</a></li>
                    <li className="menu_item"><a href='#aboutMaterials'>О материалах</a></li>
                    <li className="menu_item"><a href='#catalog'>Каталог</a></li>
                    <li className="menu_item"><a href='#reviews'>Отзывы</a></li>
                    <li className="menu_item"><a href='#order'>Заказать</a></li>
                </ul>
            </nav>
            <div className='wrapper_links'>

            <a href="https://t.me/kristina_akdemir"><img src={telegram} alt="telegram" /></a>
            <a href=""><img src={whatsapp} alt="whatsapp" /></a>
            </div>
        </footer>
        
    );
}

export default Footer;