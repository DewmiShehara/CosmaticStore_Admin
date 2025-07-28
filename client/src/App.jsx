import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CategoryRegistration from "./Pages/CategoryRegistration"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoryRegistration" element={<CategoryRegistration />} />
      </Routes>
    </>
  )
}

export default App
