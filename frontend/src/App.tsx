import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { Home } from "./pages/Home";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
