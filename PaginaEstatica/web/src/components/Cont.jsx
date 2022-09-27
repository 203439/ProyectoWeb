import '../assets/style/cont.css'
import comida from '../assets/img/image1.jpg'

function Cont() {
    return ( 
        <div id="int">
            <img className='imagen' src={comida}></img> 
            <p>"8 GUARNICIONES RENDIDORAS PARA TUS COMIDAS DE LA SEMANA"</p>
                <p className='2'>
                    "Dale a tus comidas de la semana un toque diferente con estas guarniciones rendidoras, perfectas para acompañar diversos platillos y carnes. Aquí reunimos para ti desde un arroz, hasta increíbles verduras gratinadas, todas recetas rendidoras para que les saques provecho."
                </p>
        </div>
    );
}

export default Cont;