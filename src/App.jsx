import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrimaryLayout from "./layouts/primary-layout";
import HomePage from "@/pages/home-page";

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
