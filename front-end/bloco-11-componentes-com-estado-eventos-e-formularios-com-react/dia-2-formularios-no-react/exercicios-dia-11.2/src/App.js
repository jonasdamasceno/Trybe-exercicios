
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
  };
}

  handleChange(event) {
    this.setState({ nome: event.target.value });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
         <form>
          <label>Nome:</label>
            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
           <button type="submit">Enviar</button>
          <div>
           <label>mensagem</label>
           <textarea name="mensagem" rows="4" cols="50"></textarea>
          </div>  
        </form>
      </div>
    );
  }
}

export default App;
