import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import CustomNavbar from './components/CustomNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCarousel from './components/CustomCarousel';
// import CounterApp from './components/classComponents/CounterApp';
import AppTimer from './components/Application';
import Application from './App'
import {Example} from './components/customspinner'
import Buttons from './components/customFooter'
import JustifiedExample from './components/tab'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavbar/>
    <CustomCarousel/>
   <Example/>
   <Buttons/>
   <JustifiedExample/>
  </StrictMode>,
)
