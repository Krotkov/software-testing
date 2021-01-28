import React from 'react';
import '../App/App.css';

function Info(props) {

    let name = props.userInfo.login !== '' ? (", " + props.userInfo.login) : "";

    return (
        <div className='App-text'>
            <p><h1 id='greeting'>Привет{name}!</h1></p>
            <p><h3>Пользуйся нашим сайтом, где ты можешь сохранять телефоны своих друзей и знакомых!!!</h3></p>
        </div>
    )
}

export default Info;