import React, {Component} from 'react';
import './SignIn.css'
import {Redirect} from 'react-router-dom'
import {validateLogin, validateName, validatePassword} from "../validators";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.submitRegister = this.submitRegister.bind(this)
    }

    submitRegister = async (event) => {
        event.preventDefault();
        const login = event.target[0].value
        const password = event.target[1].value
        const name = event.target[2].value
        const vLogin = validateLogin(login)
        if (!vLogin.isGood) {
            alert(vLogin.message)
            return
        }
        const vPassword = validatePassword(password)
        if (!vPassword.isGood) {
            alert(vPassword.message)
            return
        }
        const vName = validateName(name)
        if (!vName.isGood) {
            alert(vName.message)
            return
        }
        const resp = await fetch(`/users/register?login=${login}&password=${password}&name=${name}`)
        switch (resp.status) {
            case 200:
                this.props.changeLogin(login);
                break;
            default:
                alert("Choose other login:(");
        }
    }

    render() {
        if (this.props.userInfo.login === '') {
            return (
                <div className='App-form-all'>
                    <div className='App-form'>
                        <form className='App-form-content' onSubmit={this.submitRegister}>
                            <b>Sign Up</b>
                            <input className='App-form_input' placeholder='Your login' name='login'/>
                            <input className='App-form_input' placeholder='Your password' type='password'
                                   name='password'/>
                            <input className='App-form_input' placeholder='Your name' name='name'/>
                            <button className='App-form_submit-button' type='submit'>Sign up</button>
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

export default SignUp;