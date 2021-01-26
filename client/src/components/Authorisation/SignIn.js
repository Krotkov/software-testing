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
        if (this.props.userInfo.login !== '') {
            alert("You are already authorized" + this.props.userInfo.login);
        }
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
                <div className='App-form_wrapper'>
                    <div className='App-form_wrapper-full'>
                        <form className='App-form' onSubmit={this.submitLogin}>
                            <input className='App-form_input' placeholder='Your login' name='login'/>
                            <input className='App-form_input' placeholder='Your password' name='password'/>
                            <button className='App-form_submit-button' type='submit'>Log in</button>
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