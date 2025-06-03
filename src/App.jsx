import React, { Component } from 'react'
import Shop from './components/Shop/shop'
import Header from './components/Shop/Header'
import Footer from './components/Shop/Footer'
export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Shop/>
       <Footer/>
      </div>
    )
  }
}

