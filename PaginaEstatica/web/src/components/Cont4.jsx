import '../assets/style/cont.css'
import comida4 from '../assets/img/image4.jpg'

function Cont4() {
    return ( 
        <div id="int">
            <img className='imagen' src={comida4}></img>
            <p>"BENEFICIOS DE COMER CHILE"</p>
            <p className='text'>"México es conocido por ser un país colorido, divertido y muy amigable, pero sobre todo por tener una tradición culinaria muy variada y compleja, pues la combinación de todo tipo de sabores da como resultado platillos tan épicos como el mole. Además del uso de jitomate, ajo, cebolla y especias, el ingrediente esencial de la cocina mexicana es el chile, un fruto que ha estado presente en tierras aztecas desde hace miles de años, tanto así que también era parte de la milpa. Hoy en día, los mexicanos no podemos comer nuestros tacos, quesadillas, pambazos, gorditas y otros antojitos sin un toque de salsa, ya sea verde o roja. "</p>
        </div>
    );
}

export default Cont4;