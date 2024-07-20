import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/profile/Profile";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
import { ProfileEdit } from "./pages/profile/ProfileEdit";
import Products from "./pages/Products";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Private Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Dashboard />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Public Router */}
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default App;
