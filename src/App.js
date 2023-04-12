import './App.css'
import { BrowserRouter, Link, Route, Router , NavLink } from 'react-router-dom'
import HomePage from './components/home';
import Register from './components/register';
import { useState } from 'react';
function App() {

  const [logged,setlogged] = useState(true)
  if(logged === true)
  return (
    <HomePage setlogged={setlogged} logged={logged}></HomePage>
  )
  else return(
    <Register setlogged={setlogged} logged={logged}></Register>
  )
}

export default App;
