import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <RegistrationPage />, 
    },
    {
      path: "/login", 
      element: <LoginPage />, 
    },
    {
      path: "/main", 
      element: <MainPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    
  ])
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
        <RouterProvider router={router}/>
        </div>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
