import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nabvar from '../../components/Navbar'
import Footer from '../../components/Footer'
class Home extends PureComponent {
    state={
        email:"",
        password:""
    }
    onChangeInput(_e, dsd){
        console.log(_e, dsd)
        // this.setState({
        //     [name]:value
        // })
    }
    render() {
        return <Fragment>
            <Nabvar />
            <section className="hero is-primary is-medium">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            <span class="icon" style={{margin:"5px"}}>
                                <i class="fas fa-hand-point-right"></i>
                            </span>
                            Facilitamos el proceso de adopción y lo hacemos más seguro.</h1>
                        <h1 className="title">
                            <span class="icon" style={{margin:"5px"}}>
                                <i class="fas fa-hand-point-right"></i>
                            </span>
                            Ayuda a organizaciones y/o recibe ayuda para tu amigo en problemas.
                        </h1>
                        <h1 className="title">
                            <span class="icon" style={{margin:"5px"}}>
                                <i class="fas fa-hand-point-right"></i>
                            </span>
                            Ahorra adoptando con Atka! Accede a beneficios que faciliten la crianza de tu mascota.
                        </h1>
                    </div>
                </div>
            </section>
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