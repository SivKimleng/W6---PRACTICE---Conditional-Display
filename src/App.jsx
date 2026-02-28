import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS,ENGLISH_RESULTS } from "./data";
import "./index.css";
function App() {
  return (
    <>
      <Header name="Java Script"></Header>
      <main className="scores-container">
        <Scores
          courseName="Java Programming" courseResults={JAVA_RESULTS}
        />
        <Scores
          courseName="Python Programming" courseResults={PYTHON_RESULTS}
        />
        <Scores
          courseName="HTML Programming" courseResults={HTML_RESULTS}
        />
        <Scores
          courseName="English Programming" courseResults={ENGLISH_RESULTS}
        />
      </main>
    </>
  );
  }

export default App;
