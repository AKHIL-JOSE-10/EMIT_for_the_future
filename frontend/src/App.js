import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Link from "./pages/link/Link";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from"./pages/contact/Contact";
import Admin from "./pages/admin/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import PDFViewer from "./PDFViewer"; // Make sure to adjust the import path based on your project structure

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/link" element={<Link />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/pdf-viewer" render={({ location }) => (<PDFViewer pdfUrl={location.state.pdfUrl} />)} />
        
      </Routes>

   </Router>
  );
}

export default App;
