import React, { Component } from 'react'

class Auth extends Component {
    componentDidMount() {
        const value = new URL(window.location).hash
            .substr(1)
            .split('&')
            .find(param => !!param.match(new RegExp(`^${'id_token'}`)));
        if (value) {
            sessionStorage.setItem('token', value.split('=')[1])
        }
        window.location.href = '/';
    }
    render() {
        return null
    }
}

export default Auth;