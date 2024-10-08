import logo from "./logo.svg";
import "./App.css";
import Jatekter from "./componens/Jatekter";

const LISTA = ["X", " ", "O", " ", "X", " ", " ", "O", "O"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tic-Tac-Toe</h2>
      </header>
      <article>
        <div className="tartalom">
          <Jatekter lista={LISTA} />
        </div>
      </article>
      <footer>Tar Gergő</footer>
    </div>
  );
}

export default App;
