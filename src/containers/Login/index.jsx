import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { fecthLogin } from '../../actions'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
class Login extends PureComponent {
    state={
        email:"",
        password:""
    }
    onChangeInput({ target:{ name, value} }){
        this.setState({
            [name]:value
        })
    }
    onClickSubmit(){
        this.props.fecthLogin({
            ...this.state
        })
    }
    render() {
        return (<Fragment>
            <Navbar />
            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter">
                        <div className="section">
                            <div className="container">
                                <div className="card has-text-center" style={{ padding:"20px" }}>
                                <h1 className="title">Login</h1>
                                <div className="container">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text"
                                                placeholder="Email"
                                                name={"email"}
                                                value={this.state.email}
                                                onChange={this.onChangeInput.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                placeholder="Password"
                                                name={"password"}
                                                value={this.state.password}
                                                onChange={this.onChangeInput.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="control">
                                        <button 
                                            disabled={!this.props.userLoading}
                                            onClick={this.onClickSubmit.bind(this)}
                                            className={`button is-link ${this.props.userLoading && "is-loading is-fullwidth"}`}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>)
    }
}

const mapStateToProps = state => {
    console.log("state", state)
    const { userLoading, userData } = state.userS;
    return {
        userLoading,
        userData
    }
}

export default connect(mapStateToProps, {
    fecthLogin
})(Login);