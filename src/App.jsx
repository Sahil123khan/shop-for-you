import Dashboard from './component/Dashboard'
import { HomeProvider } from './context/HomeProvider'
import './App.css'

function App() {

  return (
    <>
      <HomeProvider>
        <Dashboard />
      </HomeProvider>
    </>
  )
}

export default App
