import React, {Component} from 'react';
import './Phones.css';

function represent(phone) {
    return (<li className='phones_item'>
        <div>{phone.name}</div>
        <div>{phone.phone}</div>
    </li>)
}

class Phones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: props.login,
            phones: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`/users/phones?login=${this.state.login}`)
            .then(res => res.json())
            .then(res => this.setState({name: this.state.name, phones: res}));
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const params = {
            name: event.target[0].value,
            phone: event.target[1].value
        }
        const resp = await fetch(`/users/phones?login=${this.state.login}&name=${params.name}&phone=${params.phone}`,
            {method: 'POST'});
        switch (resp.status) {
            case 200:
                this.state.phones.push(params);
                this.forceUpdate();
                break;
            default:
                alert("Try again. Something with server:(((")
        }
    }

    render() {

        if (this.state.login === '') {
            return <div className='App-text'>
                <div className='App-text_item'>You need to authorize</div>
            </div>
        }

        return (<div className='phones'>
                <ul className='budget-coins'>
                    <b>My Phones</b>
                    {this.state.phones.map(c => {
                        return represent(c);
                    })}
                </ul>
                <div className='App-form_wrapper budget-form'>
                    <div className='App-form_wrapper-half'>
                        <form className='App-form' onSubmit={this.handleSubmit}>
                            <p className='App-form_name'>
                                Add new phone
                            </p>
                            <input type='text'
                                   required='true'
                                   className='App-form_input'
                                   name='name'
                                   placeholder='name'
                            />
                            <input type='phone'
                                   required='true'
                                   className='App-form_input'
                                   name='name'
                                   placeholder='phone'
                            />
                            <button className='App-form_submit-button'>Add phone</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Phones;