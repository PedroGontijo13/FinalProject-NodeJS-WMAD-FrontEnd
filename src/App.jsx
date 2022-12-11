import NavBar from './components/NavBar'
import LostPetsPage from './pages/LostsPetsPage'
import MainPage from './pages/MainPage'
import { PageArea } from './styles'

function App() {
  return (
    <PageArea style={{background: '#FFF'}}>
      <NavBar></NavBar>
      {/* <MainPage></MainPage> */}
      <LostPetsPage />
    </PageArea>
  )
}

export default App
