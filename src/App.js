import './App.css';
import Main from './components/main.jsx';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import config from './config';

const app = firebase.initializeApp(config);

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Main firebase={app}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
