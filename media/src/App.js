import React, { Component } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import './App.css'

export class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Body />
      </body>
    )
  }
}

export default App