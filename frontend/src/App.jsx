import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"


const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<SignInPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>

      </Routes>
 
    </div>
  )
}

export default App