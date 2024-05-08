import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/screen/dashboard/Dashboard";
import MainRoute from "./route/mainroute/MainRoute";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoute />}>
          <Route index element={<Dashboard />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}