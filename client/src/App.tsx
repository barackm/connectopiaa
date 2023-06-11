import { Route, Routes } from "react-router-dom";
import "./styles/Home.css";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";

export default function App() {
  return (
    <div className="">
      <main className="main">
        <Routes>
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
