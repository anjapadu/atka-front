import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { connect } from 'react-redux';
class Pet extends Component{
    state={
        donations:[
            {
                firstName:"Carlos",
                lastName:"Huarcaya",
                amount:"10"
            },
            {
                firstName:"Holi",
                lastName:"Boli",
                amount:"15"
            }
        ]
    }
    renderDonation(){
        return this.state.donations.map((item, idx) => {
            return (
                <p className="list-item">
                    {`${item.firstName} ${item.lastName} dono: S/. ${item.amount}`}
                </p>
            )
        })
    }
    render(){
        return(
            <Fragment>
                <Navbar />
                    <div className="section">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <img src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg" alt=""/>
                                </div>
                                <div className="column">
                                    <h1 className="title">Tobi</h1>
                                    <p>Raza : Chusco</p>
                                    <p>Tamaño : Pequeño</p>
                                    <p>Colores : Caramelo con blanco</p>
                                    <p>Fecha Rescatada : 12/03/18</p>
                                    <p>Salud: Caracha</p>
                                    <p>Descripcion :  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    <br/><br/>
                                    <a className="button is-large is-fullwidth is-link">Adoptar</a>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title">Donadores</h1>
                                    <div className="list is-hoverable">
                                        { this.renderDonation() }
                                    </div>
                                </div>
                                <div className="column"></div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    const { userLoading, userData } = state.userS;
    return {
        userLoading,
        userData
    }
}

export default connect(mapStateToProps, {
    
})(Pet);