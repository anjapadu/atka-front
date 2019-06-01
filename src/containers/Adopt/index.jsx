import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { connect } from 'react-redux';
class Adopt extends Component{
    state ={
        animals:[
            {
                id:1,
                name:"boli",
                date:"",
                raze:"",
                colors:"",
                size:"",
                healtStatus:"",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                status:1,
                img:"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"
            },
            {
                id:1,
                name:"boli",
                date:"",
                raze:"",
                colors:"",
                size:"",
                healtStatus:"",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                status:1,
                img:"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"
            },
            {
                id:1,
                name:"boli",
                date:"",
                raze:"",
                colors:"",
                size:"",
                healtStatus:"",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                status:1,
                img:"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"
            },
            {
                id:1,
                name:"boli",
                date:"",
                raze:"",
                colors:"",
                size:"",
                healtStatus:"",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                status:1,
                img:"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"
            },
            {
                id:1,
                name:"boli",
                date:"",
                raze:"",
                colors:"",
                size:"",
                healtStatus:"",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                status:1,
                img:"https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"
            }
        ]
    }
    renderAnimales(){
        return this.state.animals.map((item, idx) =>{
            return (<div className="column is-one-quarter">
                <div style={{ padding: "20px"}}>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={item.img} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                            </div>

                            <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        })
    }
    render(){
        return(
            <Fragment>
                <Navbar />
                <div className="section">
                    <div className="container">
                        <div className="columns is-gapless is-multiline is-mobile">
                            { this.renderAnimales() }
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
    
})(Adopt);