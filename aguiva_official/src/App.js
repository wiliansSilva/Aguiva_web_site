import GlobalStyle from "./assets/styles/globalStyle";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header.js";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Header />
      <Question />
    </div>
  );
}

export default App;
