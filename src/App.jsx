import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'



function App() {


  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-5xl bg-green-400 text-center text-red-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}



export default App
