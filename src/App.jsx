import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes, Route} from  "react-router-dom"
import { Home } from './Pages/Home.jsx'
import { About } from './Pages/About.jsx'
import { Terms } from './Pages/Terms.jsx'
import { Nav } from './Components/Nav.jsx'
import { Contact } from './Pages/Contact.jsx'

function App() {
//  const [count, setCount] = useState(0)

  return (
   <BrowserRouter basename="/">
     <div>
	<Nav />
	<Routes>
	  <Route path='/' element={<Home />} />
	  <Route path='/about' element={<About />} />
 	  <Route path='/terms' element={<Terms />} />	
	  <Route path='/contact' element={<Contact />} />
	</Routes>
     </div>   
  </BrowserRouter> 
  )
}

export default App
