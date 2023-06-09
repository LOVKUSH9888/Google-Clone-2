import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? ' dark' : ''}>
     <div className = "bg-gray-100 dark : bg-gray-900 dark : text-200 min-h-screen">
      App
     </div>
     <h1 className='text-red-300'>Hello</h1>
    </div>
    
  )
}

export default App
