import GlobalStyle from "./assets/styles/globalStyle";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header.js";
import Question from "./components/Question/Question";
import VisualId from "./components/VisualId/VisualId";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Header />
      <Question />
      <VisualId />
    </div>
  );
}

export default App;
