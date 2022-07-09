import { Navigate, Route, Routes } from 'react-router-dom'
import { Admin, Login, Test } from './page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/:slug" element={<Admin />} />
        <Route path="/admin/:slug/:opt" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
