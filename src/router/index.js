import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    withRouter
} from 'react-router-dom';
import { } from '../actions';
import { push } from 'connected-react-router';
import {
    Home,
    Login,
    Profile,
    Services,
    Pet,
    Adopt
} from './asyncRoutes';
import { appSelector } from '../selectors';

class RouterApp extends React.Component {
    render() {
        return (<Layout
            {...this.props}
        >
            <Switch>
                <Route
                    path={"/"}
                    component={() => <Home />}
                    exact
                />
                <Route
                    path={"/login"}
                    component={() => <Login />}
                    exact
                />
                <Route
                    path={"/profile"}
                    component={() => <Profile />}
                    exact
                />
                <Route
                    path={"/servicios"}
                    component={() => <Services />}
                    exact
                />
                <Route
                    path={"/mascotas"}
                    component={() => <Pet />}
                    exact
                />
                <Route
                    path={"/adoptar"}
                    component={() => <Adopt />}
                    exact
                />
            </Switch>
        </Layout >)
    }
}

export const Layout = withRouter((props) => {
    return (<div>
        {props.children}
    </div >)
})

const mapStateToProps = (state) => {
    const {

    } = appSelector(state);
    return {

    }
}

export default (connect(mapStateToProps, {
    push
})(RouterApp))