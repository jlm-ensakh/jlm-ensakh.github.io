import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HOME_PAGE, NOT_FOUND_PAGE } from './Routes'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
