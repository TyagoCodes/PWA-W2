import './App.css'
import {Header} from "./Components/Header.jsx";
import {About} from "./Components/About.jsx";
import {Work} from "./Components/Work.jsx";
import {Skills} from "./Components/Skills.jsx";
import {Footer} from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
            <About></About>
            <Work></Work>
            <Skills></Skills>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App;


