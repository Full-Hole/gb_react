import {useEffect,  useState} from 'react';
import Message from './Message';
import Chat from './Chat';
import MessageInput from './MessageInput';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';


function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState([]);
  const [chatList, setChatList] = useState([]);
  const AUTHOR = {default: 'Guest', bot: 'Bot', me: ''};
  //{ author: '', text: ''}
  function addMessage(author, text) {
    setMessageList([...messageList, { author: author, text: text}])
  }

  const getChatList = () => {
    setChatList([{chatName: 'first', chatId: '1x'}, {chatName: 'second', chatId: '2x'}])
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
      addMessage(AUTHOR.bot, text);    
  }
  useEffect(() => {
    getChatList();
  }, []);
  
  useEffect(() => {
    //getChatList();
      if(messageList.length && messageList[messageList.length-1].author !== AUTHOR.bot){
        let timerId = setTimeout(bot,1500);
        return ()=>{
          clearTimeout(timerId);
        }
      }
    
  });


  

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{display: 'flex'}}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.default', border: 'solid' }}>
          <List>
            {chatList.map((chat) => (<Chat data={chat}/>))}
          </List>
        </Box>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 360,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}>
        <List className="message-list">
          {messageList.map((singlemessage, index)=> (<Message key={index} data={singlemessage}/>))}
        </List>
        <MessageInput onChange={handleMessageInput} onClick={submitForm} value={message}/>
        </Box>
      </Container>
    </div>
);
}

export default App;