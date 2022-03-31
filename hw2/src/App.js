import {
  useState
} from 'react';
import Message from './Message';
import './App.css';

function App() {
  const [messageList, setMessage] = useState([]);
  //{ author: '', text: ''}
  function addMessage(author, text) {
    setMessage([...messageList, { author: author, text: text}])
  }
  const submitForm = (e) => {
    e.preventDefault();
    //console.log(e);
    addMessage(e.target.author.value, e.target.text.value);
  }

  return (
    <div className="App">
      <div className='main-container'>
        <div className="message-list">
          {messageList.map((message)=> (<Message data={message}/>))}
        </div>
        <form className="messageForm" onSubmit={submitForm}>                
          <label htmlFor="author">Автор: </label><input type="text" name="author" id="author"/>
          <label htmlFor="text">Сообщение: </label><textarea name="text" id="text"></textarea>
      
          <button>Click me!</button>
        </form>
      </div>
    </div>
);
}

export default App;