import { Navigate, Route, Routes } from 'react-router-dom'
import { Admin, Layouts, Login, Page404, Test } from './page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/:slug" element={<Layouts />}>
          <Route index element={<Admin />} />
          <Route path=":opt/:action" element={<Admin />} />
          <Route path=":opt" element={<Admin />} />
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
