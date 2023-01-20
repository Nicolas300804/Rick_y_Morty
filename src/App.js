import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav";
import { useState, useEffect } from 'react';
import Detail from './components/Detail';
import About from './components/About';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Form from "./components/Form.jsx"


function App () {

  const location = useLocation()
  const navigate =  useNavigate()
  const [characters, setCharacters] = useState([]);
  const[access, setAccess] = useState(false)

  const username = "nicogr300804@gmail.com"
  const password = "1234ngr"

  const login = (userData) =>{
    if (userData.username ===username && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
    !access && navigate("/")
  },[access] )


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App'  style={{ padding: '25px' }}>
{/*       {location.pathname ==="/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>} */}
      <Routes>
        <Route path="Home" element={<Cards onClose={onClose} characters={characters}/> }/>
        <Route path="About" element={<About/> }/>
        <Route path="Detail/:detailId" element={<Detail/> } />
        <Route path="/" element={<Form/> } />
      </Routes>
          
    </div>
  )
}

export default App

