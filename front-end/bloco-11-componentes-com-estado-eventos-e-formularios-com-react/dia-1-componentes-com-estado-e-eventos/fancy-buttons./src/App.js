import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();  // Chamada para o construtor da classe pai

    this.state = { 
      countBotton1: 0,
      countBotton2: 0,
      countBotton3: 0,
    }
   

    this.handleClick = this.handleClick.bind(this); 
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick() {
    this.setState(( estadoAnterior, _props) => {
      return {
        countBotton1: estadoAnterior.countBotton1 + 1,
      } // Retorna o novo estado
    })   
  }
  handleClick2() {
    this.setState(( estadoAnterior, _props) => {
      return {
        countBotton2: estadoAnterior.countBotton2 + 1,
      } // Retorna o novo estado
    })
  }
  handleClick3() {
    this.setState(( estadoAnterior, _props) => {
      return {
        countBotton3: estadoAnterior.countBotton3 + 1,
      } // Retorna o novo estado
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.countBotton1}</button>
        <button onClick={this.handleClick2}>{this.state.countBotton2}</button>
        <button onClick={this.handleClick3}>{this.state.countBotton3}</button>
      </div>
    );
  }
}
export default App;