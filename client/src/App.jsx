import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CategoryRegistration from "./Pages/CategoryRegistration"
import SideBarDrawer from "./Components/SideBarDrawer"

function App() {

  return (
    <>
      <SideBarDrawer />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<CategoryRegistration />} />
      </Routes>
    </>
  )
}

export default App
