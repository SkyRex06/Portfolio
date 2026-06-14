import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/index";
import { ProjectDetailPage } from "./pages/projects/[slug]";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
