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

    <BrowserRouter>
    <div className="App">
  <Navbar/>
<Routes>
  <Route path="/" exact element={
      <Home/>
  } / >
<Route path="/myjourney" exact element={
 <MyJourney/>
}/>
<Route path="/contact" exact element={
 <Contact/>
}/>
<Route path="/projects" exact element={
 <Projects/>
}/>
     </Routes>
 <Footer/>
    </div>
    </BrowserRouter>

  );
}
export default App;
