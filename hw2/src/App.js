import {useEffect,  useState} from 'react';
import Message from './Message';
import './App.css';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState([]);
  const AUTHOR = {default: 'Guest', bot: 'Bot', me: ''};
  //{ author: '', text: ''}
  function addMessage(author, text) {
    setMessageList([...messageList, { author: author, text: text}])
  }

  const handleMessageInput =(e) =>{
    setMessage(e.target.value);
  }
  const submitForm = (e) => {
    e.preventDefault();
    //console.log(e);
    addMessage(AUTHOR.me ? AUTHOR.me : AUTHOR.default, message);
  }
  const bot =() => {
    let text = 'Спасибо за отзыв';
    if(messageList.length){
    if(messageList[messageList.length-1].author !== AUTHOR.bot){
      addMessage(AUTHOR.bot, text);
    }
  }
  }
  useEffect(() => {
    let timerId = setTimeout(bot,1500);
    return ()=>{
      clearTimeout(timerId);
    }
  })

  

  return (
    <div className="App">
      <div className='main-container'>
        <div className="message-list">
          {messageList.map((singlemessage)=> (<Message data={singlemessage}/>))}
        </div>
        <form className="messageForm" onSubmit={submitForm}>                
          <label htmlFor="text">Сообщение: </label><textarea name="text" id="text"  onChange={handleMessageInput}></textarea>
      
          <button>Click me!</button>
        </form>
      </div>
    </div>
);
}

export default App;