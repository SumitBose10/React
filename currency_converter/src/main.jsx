import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import InputBox from './InputBox.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <InputBox/>
  </>
  
)
