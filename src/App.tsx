import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className=' flex flex-col'>
      <Outlet/>
    </div>
  )
}

export default App
