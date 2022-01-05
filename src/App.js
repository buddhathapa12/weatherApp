import Weather from './components/weather.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'weather-icons/css/weather-icons.css';

const API_KEY = "a4229c046a8180f4705e9ea6baf2bf51";
function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
