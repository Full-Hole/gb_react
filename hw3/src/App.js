import {useEffect,  useState} from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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
    if(message){
      addMessage(AUTHOR.me ? AUTHOR.me : AUTHOR.default, message);
      setMessage("");
    }
    else
      console.log("Empty message");
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
      <Container maxWidth="sm">
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
        <div className="message-list">
          {messageList.map((singlemessage, index)=> (<Message key={index} data={singlemessage}/>))}
        </div>
        <MessageInput onChange={handleMessageInput} onClick={submitForm} value={message}/>
        </Box>
      </Container>
    </div>
);
}

export default App;