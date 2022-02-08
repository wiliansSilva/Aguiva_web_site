import GlobalStyle from "./assets/styles/globalStyle";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Headers.js";
import Question from "./components/Question/Question";
import VisualId from "./components/VisualId/VisualId";
import Systems from "./components/Systems/Systems";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Header />
      <Question />
      <VisualId />
      <Systems />
      <Footer />
    </div>
  );
}

export default App;
