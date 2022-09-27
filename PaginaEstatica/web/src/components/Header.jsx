import '../assets/style/header.css'
import imagen from '../assets/img/logo.jpg'

function Header() {
    return ( 
        <nav>
            <div class="contenedor">
                <img id="logo" src={imagen}></img>
                <h2 class="titulo" ></h2>
                <ul  class="nav-ul_menu" >
                    <li>Sociedad de la comida</li>
                </ul>
            </div>
        </nav>    
    );
}

export default Header;