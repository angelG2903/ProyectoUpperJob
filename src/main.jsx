import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
import './components/Pages/styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import ContratarPlan from './components/Pages/Empresa/ContratarPlan'
// import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ContratarPlan/>
  </BrowserRouter>

)
