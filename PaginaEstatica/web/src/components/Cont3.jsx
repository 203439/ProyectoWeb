import '../assets/style/cont.css'
import comida3 from '../assets/img/image3.jpg'

function Cont3() {
    return ( 
        <div id="int">
            <img className='imagen' src={comida3}></img>
            <p>"BREVE GUÍA DE LA GASTRONOMÍA COREANA."</p>
            <p className='2'>"Corea del Sur posee unas de las gastronomías más excitantes, y junto a su cultura pop, pisa cada vez más fuerte en el mundo. Su cocina tradicional (hansik) es el resultado de la geografía, las estaciones y la complejidad cultural. Y mientras la cocina tradicional viene de un legado antiguo, el contraste es la comida de las calles: moderna, vibrante y desenfadada, en la que no faltan las sorpresas colmadas en fritura y un ángulo fotografiable."</p>
        </div>
    );
}

export default Cont3;