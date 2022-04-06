//import logo from './logo.svg';
import './App.scss';
import Message from './Message';
const mtext = 'Some Text'

function App() {
  return (
    <div className="App">
      <Message text={mtext}/>
    </div>
  );
}

export default App;
