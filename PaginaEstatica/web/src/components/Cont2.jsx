import '../assets/style/cont.css'
import comida2 from '../assets/img/image2.jpg'

function Cont2() {
    return ( 
        <div id="int">
            <img className='imagen' src={comida2}></img>
            <p>"ALIMENTOS PARA COMBATIR LA RESISTENCIA A LA INSULINA "</p>
            <p className='2'>
                    "Como ya sabes, la diabetes es un padecimiento que ha ido alza entre niños y adultos desde hace varios años, afectando la calidad de vida y la salud de millones de personas. Debido a que este padecimiento afecta diversos órganos, es muy importante mantenerse informada, adoptar una dieta más saludable, evitar o limitar el consumo de ciertos alimentos y hacer ejercicio, pero sabemos que cambiar tu estilo de vida puede ser muy agobiante."</p>
            
        </div>
    );
}

export default Cont2;