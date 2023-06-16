import Actions from './components/Actions'
import DataDisplay from './components/DataDisplay'
import DataInput from './components/DataInput'
import Home from './components/Home'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/data-display" element={<DataDisplay />} />
        <Route path="/data-input" element={<DataInput />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </Router>
  )
}

export default App
