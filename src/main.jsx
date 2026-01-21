import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import CustomNavbar from './components/CustomNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCarousel from './components/CustomCarousel';
// import CounterApp from './components/classComponents/CounterApp';
import AppTimer from './components/Application';
import Application from './components/Application'
import {Example} from './components/customspinner'
import Buttons from './components/customFooter'
import JustifiedExample from './components/tab'
import ParentClass from './components/classcomponent';
import Counter from './classcounter';
import { Tab } from 'bootstrap';
import Application2 from './components/Application';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Application2/>
  </StrictMode>,
)
