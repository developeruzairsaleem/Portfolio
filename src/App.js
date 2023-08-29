import styles from "./App.module.css";
import Home from "./pages/Home/Home";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import MyJourney from "./pages/MyJourney/MyJourney";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
<Routes>
  <Route path="/" exact element={
      <Home/>
  } / >
<Route path="/myjourney" exact element={
 <MyJourney/>
}/>
<Route path="/contact" exact element={
 <>

  <Navbar/>
 <Contact/>
 <Footer/>
 </>
 
}/>
<Route path="/projects" exact element={
 <>

  <Navbar/>
 <Projects/>
 <Footer/>
 </>
 
}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
