import './App.css'
import SideBar from './Components/SideBar'
import { useEffect, useState } from 'react';
import {ThemeProvider} from '@mui/material/styles';
import theme from './utils/MuiThemes'
import { Routes, Route } from "react-router-dom";
import Registery from './pages/Registery';
import About from './pages/About';
import AccountInfo from './pages/AccountInfo';
import Droneway from './pages/Droneway';
import Login from './pages/login';
import { useNavigate, Navigate } from "react-router-dom";
import loadData from './services/loadData.service';



function App() {
  const navigate = useNavigate();
  const [pages,setPages] = useState({});

  
useEffect( () => {
  if(!localStorage.getItem('user')){
    return;
  }
  const datafetch = async () => {
    let result = await loadData;
    setPages({
      Registery: <Registery data={result}/>,
      About: <About />,
      Droneway: <Droneway />,
      AccountInfo: <AccountInfo />
    })
    navigate("/Home")
  }
  datafetch();
},[navigate])
 

  return (
    <>
      <ThemeProvider theme = {theme}>
        <Routes>
            <Route path="*" element={< Navigate to={{pathname: '/'}} />} />
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<SideBar pages={pages} navigate = {navigate}/>} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
