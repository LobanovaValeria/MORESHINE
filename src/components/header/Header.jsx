import '../../styles/components/header.css'
import logo from '../../assets/images/logo.svg'

function Header() {
    return ( 
        <header className="header">
            <a href="#"><img className="logo" src={logo} alt="logo" /></a>
            
            <nav className="navMenu">
                <ul className="menu">
                    <li className="menu_item"><a href='#aboutBrand'>О брэнде</a></li>
                    <li className="menu_item"><a href='#catalog'>Каталог</a></li>
                    <li className="menu_item"><a href='#aboutMaterials'>О материалах</a></li>
                    <li className="menu_item"><a href='#reviews'>Отзывы</a></li>
                    <li className="menu_item"><a href='#order'>Заказать</a></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;