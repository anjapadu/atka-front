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
                        Imagen
                    </h1>
                    <ul>
                        <li>Facilitamos el proceso de adopción y lo hacemos más seguro.</li>
                        <li>Ayuda a organizaciones y/o recibe ayuda para tu amigo en problemas.</li>
                        <li>Ahorra adoptando con Atka! Accede a beneficios que faciliten la crianza de tu mascota. (Suscripción gratuita)</li>
                    </ul>
                    </div>
                </div>
            </section>
            <div className="section">
                <div className="container">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-three-quarters">
                            <div className="columns">
                                <div className="column">
                                    <p>
                                        <ul>
                                            <li>Facilitamos el proceso de adopción y lo hacemos más seguro.</li>
                                            <li>Ayuda a organizaciones y/o recibe ayuda para tu amigo en problemas.</li>
                                            <li>Ahorra adoptando con Atka! Accede a beneficios que faciliten la crianza de tu mascota. (Suscripción gratuita)</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="column">
                                <figure class="image image is-16by9">
                                    <img src="https://bulma.io/images/placeholders/256x256.png" />
                                </figure>
                                </div>
                            </div>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
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