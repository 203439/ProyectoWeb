import Header from "../components/Header"
import Footer from "../components/Footer"
import Cajon from "../components/Cajon"


function Layout({children}) {
    return ( 
        <>
            <Header></Header>
            <Cajon></Cajon>
            {children}
            <Footer></Footer>
        </>
    );
}

export default Layout;