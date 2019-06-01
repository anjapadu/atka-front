import React from 'react';
import Loadable from 'react-loadable';

const withLoader = (loader) => ({
    ...loader,
    loading: () => <div className="pageloader is-active is-dark"><span className="title">Cargando...</span></div>
})

export const Home = Loadable(
    withLoader({
        loader: () => import(/* webpackChunkName: "home" */'../containers/Home')
    })
)
export const Login = Loadable(
    withLoader({
        loader: () => import(/* webpackChunkName: "login" */'../containers/Login')
    })
)
export const Profile = Loadable(
    withLoader({
        loader: () => import(/* webpackChunkName: "login" */'../containers/Profile')
    })
)
export const Services = Loadable(
    withLoader({
        loader: () => import(/* webpackChunkName: "login" */'../containers/Services')
    })
)
export const Pet = Loadable(
    withLoader({
        loader: () => import(/* webpackChunkName: "login" */'../containers/Pet')
    })
)
export const Adopt = Loadable(
    withLoader({
        loader: () => import(/* webpackChunkName: "login" */'../containers/Adopt')
    })
)