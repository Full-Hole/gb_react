import {
  useState
} from 'react';
import Message from './Message';
import './App.css';

function App() {
  const [messageList, setMessage] = useState([{
    author: "User1",
    text: "Message"
  }, {
    author: "User3",
    text: "Message"
  }]);
  //{ author: '', text: ''}
  function addMessage() {
    setMessage([...messageList, {}])
  }
  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
  }
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log('112');
  }

  return (
    <div className="App">
      <span className='counter'>{count}</span>
      <button className='counter-button' onClick={handleClick}>Click!</button>
      <div className="message-list">
        {messageList.map((message)=> (<Message data={message}/>))}
      </div>
      <form className="messageForm" onSubmit={submitForm}>                
        <label htmlFor="author">Автор</label><input type="text" name="author" id="author"/>
        <label htmlFor="text">Сообщение</label><textarea name="text" id="text"></textarea>
    
        <button>Click me!</button>
      </form>
    </div>
);
}

export default App;