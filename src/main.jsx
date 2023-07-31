import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
import './components/Pages/Empresa/styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App/>
    {/* <Menu/> */}
  </BrowserRouter>

)
