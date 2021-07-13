import CardsContainer from "./CardsContainer";
import infos from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="app-header">Completed Front End Mentor challenges</h1>
      <CardsContainer infos={infos} />
    </div>
  );
}

export default App;
