
import './App.css';
import React from 'react';

function clique () {
  console.log('funcionou?');
};

function clique2 () {
  console.log('funcionou2?');
}

function clique3 () {
  console.log('funcionou3?');
}

class Botton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ clique }>botao </button>
        <button onClick={ clique2 }>botao 2</button>
        <button onClick={ clique3 }>botao 3</button>
      </div>
    );
  }
}


export default Botton;
