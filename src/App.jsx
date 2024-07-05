import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import AddBookContainer from "./components/addBookContainer/AddBookContainer"

function App() {
  return (
    <div className="App">
      <h1>Hello Books</h1>

      <CardContainer />
      <AddBookContainer/>
    </div>
  );
}

export default App;
