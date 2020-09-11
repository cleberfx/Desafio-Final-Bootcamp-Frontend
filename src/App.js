import React from 'react';
import service from './services/transactionService.js';

export default function App() {
  let period = '2020-09';
  console.log(service.getAllBydate(period));
  return <h1>Desafio Final do Bootcamp Full Stack</h1>;
}
