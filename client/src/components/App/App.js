import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../Header/Header';

class App extends React.Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }))
            .catch(console.error);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <h1 className="App-header">Users</h1>
                    {this.state.users.map(user =>
                        <div key={user.login}>{JSON.stringify(user)}</div>
                    )}
                </Router>
            </div>
        );
    }
}
export default App;
