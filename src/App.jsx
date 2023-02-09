import React, { memo, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";

const App = memo(() => {
  const navigate = useNavigate();
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) navigate("/home");
  }, [navigate]);

  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
