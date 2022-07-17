import { Navigate, Route, Routes } from 'react-router-dom'
import { Admin, Layouts, Login, Page404, Test } from './page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layouts />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/test" element={<Test />} />
          <Route path="/admin/:slug" element={<Admin />} />
          <Route path="/admin/:slug/:opt" element={<Admin />} />
          <Route path="/admin/:slug/:opt/:action" element={<Admin />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
