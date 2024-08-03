import { Routes, Route } from "react-router-dom";

import SideBar from "../components/navigation/SideBar";
import { routes } from "./RouteList";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<SideBar>{route.element}</SideBar>}
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
