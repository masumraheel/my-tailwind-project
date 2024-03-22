// import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineCharts/LineChart'
import BarChart from './components/BarChat/BarChart'







function App() {


  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-5xl bg-green-400 text-center text-red-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart ></LineChart>
      <BarChart></BarChart>

    </>
  )
}



export default App
