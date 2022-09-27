import '../assets/style/cont.css'
import comida5 from '../assets/img/image5.jpg'

function Cont5() {
    return ( 
        <div id="int">
            <img className='imagen' src={comida5}></img>
            <p>"LOS BENEFICIOS DE COMER ENTRE LAS 7 A.M. Y LAS 3 P.M."</p>
            <p className='text2'>"el tiempo restringido de comida fue “más efectivo para perder peso y disminuir la presión arterial diastólica que comer durante un periodo de 12 o más horas durante 14 semanas”. Por lo tanto, limitar el horario en el que se pueden consumir alimentos podría convertirse en un tratamiento para combatir la obesidad y la hipertensión. Por si fuera poco, los científicos también señalan que “mejora el estado de ánimo al disminuir la fatiga y los sentimientos de depresión- desánimo, mientras que incrementar el vigor”. Otro hallazgo importante fue que aquellas personas que pueden limitar sus horas de comida entre las 7 a.m. y las 3 p.m. pierden más grasa corporal y grasa visceral."</p>
        </div>
    );
}

export default Cont5;