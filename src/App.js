import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from './route';
import './App.css';
const PageNotFound = () => <div>404 - Page Not Found</div>;

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      {ProtectedRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
