import Header from "../components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="text-container">
        <blockquote className="fade-in-text">
          <span className="logo-black">Explore, Inspire</span>
          <span className="logo-red">, Create – Your J</span>
          <span className="logo-green">ourney Starts Here</span>
          </blockquote>
      </div>
    </div>
  );
}

export default App;
