import { Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import HomePage from "./pages/HomePage"
import PublicRoute from "./middleware/PublicRoute"
import ProtectedRoute from "./middleware/ProtectedRoute"
import PasswordPage from "./pages/PasswordPage"
import EcommercePage from "./pages/Ecommerce/EcommercePage"
import Cart from "./pages/Ecommerce/Cart"
import TodoPage from "./pages/Todoapp/TodoPage"
import Inputtextfield from "./pages/Inputcheck/Inputtextfield"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>} />
      <Route path="/signup" element={
        <PublicRoute>
          <SignupPage />
        </PublicRoute>
      } />
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      <Route path="/passwordpage" element={<PasswordPage />} />
      
      <Route path="/ecommerce" element={<EcommercePage />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/todopage" element={<TodoPage />} />
      <Route path="/inputfield" element={<Inputtextfield />}/>
    </Routes>
  )
}

export default App
