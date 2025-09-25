import { useState } from 'react'
import {createRoot} from "react-dom/client"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Avatars from './components/Avatars'
function App() {
  const [count, setCount] = useState(0)

  createRoot(document.getElementById('root')).render (
    <>
      <Navbar />
      <Avatars />
    </>
  )
}

export default App
