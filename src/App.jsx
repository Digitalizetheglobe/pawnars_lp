import { Routes, Route } from 'react-router-dom'
import PawnaLakeVillas from './components/home.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PawnaLakeVillas />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
