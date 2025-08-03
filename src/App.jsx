import Dashboard from './component/Dashboard'
import { HomeProvider } from './context/HomeProvider'
import { FirebaseProvider } from './context/Firebase'
import './App.css'
import AllProducts from './component/AllProductsFirebase'

function App() {

  return (
    <>
      <FirebaseProvider>
        <HomeProvider>
          <Dashboard />
          <AllProducts/>
        </HomeProvider>
      </FirebaseProvider>
    </>
  )
}

export default App
