import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { Home } from "./pages/Home";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Dashboard />} />
            </Route>
            {/* Public Router */}
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
