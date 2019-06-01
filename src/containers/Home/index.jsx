import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nabvar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../img/banner.png'
class Home extends PureComponent {
    state={
        email:"",
        password:""
    }
    
    onChangeInput(_e, dsd){
        console.log(_e, dsd)
    }
    render() {
        const styleBanner = (Image) => {
            return {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backgroundImage: `url(${Image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
            }
        }
        return <Fragment>
            <Nabvar />
            <section className="hero is-medium" style={styleBanner(Banner)}>
                <div className="hero-body" >
                    <div ></div>
                    <div className="container">
                        <h1 className="title has-text-white">
                            <span className="icon" style={{margin:"5px"}}>
                                <i className="fas fa-hand-point-right"></i>
                            </span>
                            Facilitamos el proceso de adopción y lo hacemos más seguro.</h1>
                        <h1 className="title has-text-white">
                            <span className="icon" style={{margin:"5px"}}>
                                <i className="fas fa-hand-point-right"></i>
                            </span>
                            Ayuda a organizaciones y/o recibe ayuda para tu amigo en problemas.
                        </h1>
                        <h1 className="title has-text-white">
                            <span className="icon" style={{margin:"5px"}}>
                                <i className="fas fa-hand-point-right"></i>
                            </span>
                            Ahorra adoptando con Atka! Accede a beneficios que faciliten la crianza de tu mascota.
                        </h1>
                    </div>
                </div>
            </section>
            <div style={{display: "block", content: "", clear: "both"}}></div>
            <Footer />
        </Fragment>
    }
}
const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {

})(Home);