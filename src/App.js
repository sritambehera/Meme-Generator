import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemeGenerator from './MemeGenerator'
import Header from './Header'

class App extends React.Component
{
  render(){
    return (
       <div>
       <Header />
       <p> Welcome!</p>
       <MemeGenerator />

       </div>
      )
  }
}
export default App;
