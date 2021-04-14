import logo from "./logo.svg";
import "./App.css";

function App() {
  const url =
    "https://api.coronavirus.data.gov.uk/v1/data?" +
    "filters=areaType=nation;areaName=england&" +
    'structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}';

  function getData() {
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );

          return;
        }

        // Examine the text in the response - this function is getting the images onto the page
        response.json().then(function(data) {
          console.log(data);
          //this has come from the console log to display the images
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getData}>Get Api data</button>
      </header>
    </div>
  );
}

export default App;
