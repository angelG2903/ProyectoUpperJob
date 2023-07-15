import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
import './components/Pages/styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Modal } from './components/Pages/Empresa/Modal'
import { PostulantesF } from './components/Pages/Empresa/PostulantesF'
import { PostulantesDetalles } from './components/Pages/Empresa/PostulantesDetalles'
// import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App/>
    {/* <PostulantesDetalles/> */}
    {/* <PostulantesF/> */}
  </BrowserRouter>

)
