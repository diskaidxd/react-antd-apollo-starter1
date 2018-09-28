import React, { Component } from 'react'
import { Layout } from 'antd'
import ExchangeRates from './ExchangeRates'

class App extends Component {
  state = {
    addUser: null,
    editUser: null,
    alert: ''
  }

  addUser = () => {
    this.setState({
      addUser: {
        name: '',
        email: ''
      }
    });
  }

  editUser = (user) => {
    this.setState({
      editUser: user
    });
  }

  close = () => {
    this.setState({
      addUser: null,
      editUser: null
    });
  }

  alert = (msg) => {
    this.setState({
      alert: {
        type: Object.keys(msg)[0],
        message: Object.values(msg)[0]
      }
    });
  }

  render() {
    return (
   
     <div> <Layout style={{height: 'auto', padding: '20px', textAlign: 'center'}}>
        <Layout.Content>
          <h1>
            Welcome to React Ant Design Apollo Starter
          </h1>

          <ExchangeRates />

          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Powered by <a href="http://inspiredsolutions.pe" target="_blank">Inspired Solutions</a>
          </p>
        </Layout.Content>
      </Layout> </div>

      
    )
  }
   render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">React GraphQL CRUD</h1>
        </header>
        <Alert alert={this.state.alert} />
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addUser}>Add User</button>
          <UsersCount />
        </div>
        <UsersList
          editUser={this.editUser}
          alert={this.alert} />
        <UsersAdd
          user={this.state.addUser}
          close={this.close}
          alert={this.alert} />
        <UsersEdit
          user={this.state.editUser}
          close={this.close}
          alert={this.alert} />
      </div>
    );
  } 
}


export default App
