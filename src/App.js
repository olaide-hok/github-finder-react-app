import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AlertProvider } from "./components/context/alert/AlertContext";
import { GithubProvider } from "./components/context/github/GithubContext";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import User from "./components/pages/User";
import Alert from "./components/users/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>   
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Alert/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </AlertProvider>
   </GithubProvider>
  );
}

export default App;
