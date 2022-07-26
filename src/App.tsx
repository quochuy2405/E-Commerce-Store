import { Navigate, Route, Routes } from 'react-router-dom'
import { Admin, Layouts, Login, Page404, Test } from './page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/admin" element={<Layouts />}>
          <Route path=":slug/:opt/:action" element={<Admin />} />
          <Route path=":slug/:opt" element={<Admin />} />
          <Route path=":slug" element={<Admin />} />
          <Route path="test" element={<Test />} />
          <Route path="" element={<Navigate to="/admin/dashboard" replace />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
