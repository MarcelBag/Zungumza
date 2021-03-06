import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';
import { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class App extends Component {
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-title'>
          Zungumza
        </h1>
        </header>
        <MessengerCustomerChat
          pageId="154812298055641"
          appId="131184942178492"
          htmlRef="<REF_STRING>"
       />,
        <p>
        . 
        </p>
        <Facebook/>
        
    </div>
    )
  }
}
export default App;
