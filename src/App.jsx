import './App.css'
import SideBar from './Components/SideBar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {ThemeProvider} from '@mui/material/styles';
import theme from './utils/MuiThemes'
import Registery from './pages/Registery';
import About from './pages/About';
import AccountInfo from './pages/AccountInfo';
import Analytics from './pages/Analytics';
import Droneway from './pages/Droneway';



function App() {
  const [pages,setPages] = useState({})

  useEffect(() => {
    axios.get('https://concise-emblem-395909.oa.r.appspot.com/download')
    .then(function (response) {
      // handle success
      let result = []
      response.data.forEach((e,i) => {
        result.push({
          id: i,
          location: e.location.lat === 999 || e.location.lat === 999 ? "N/A" : 
                <a key={i} href={`http://maps.google.com/maps?z=12&t=h&q=loc:${e.location.lat}+${e.location.lng}`} target='_blank' rel='noreferrer'> {e.location.lat} {e.location.lng} </a>,
          speedlimit: e.speed_limit,
          detectedspeed: e.recorded_speed,
          datetime: e.date,
          image: <a key={i} href={e.image} target='_blank' rel='noreferrer'> Download </a> 
        })
      })
      setPages({
        Registery: <Registery data={result}/>,
        Analytics: <Analytics data={result}/>,
        About: <About />,
        Droneway: <Droneway />,
        AccountInfo: <AccountInfo />
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[])

  return (
    <>
      <ThemeProvider theme = {theme}>
        <SideBar pages={pages}/>
      </ThemeProvider>
    </>
  )
}

export default App
