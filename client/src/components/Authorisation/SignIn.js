import React, {Component} from 'react';
import './SignIn.css'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this)
    }

    submitLogin = async (event) => {
        event.preventDefault();
        const resp = await fetch(`/users/login?login=${event.target[0].value}&password=${event.target[1].value}`)
        switch (resp.status) {
            case 200:
                this.props.changeLogin(event.target[0].value);
                break;
            default:
                alert("Wrong login or password");
        }
    }

    render() {
        if (this.props.userInfo.login === '') {
            return (
                <div className='App-form-all'>
                    <div className='App-form'>
                        <form className='App-form-content' onSubmit={this.submitLogin}>
                            <b>Sign In</b>
                            <input className='App-form_input' placeholder='Your login' data-testid='sign-in-login' name='login'/>
                            <input className='App-form_input' placeholder='Your password' data-testid='sign-in-password' type='password' name='password'/>
                            <button className='App-form_submit-button' data-testid='sign-in-button' type='submit'>Sign in</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to='/info'/>
            )
        }
    }
}

export default SignIn;