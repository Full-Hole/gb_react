// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MessageInput from './MessageInput';
import Message from './Message';
import {useEffect,  useState} from 'react';
import {AUTHOR} from '../constant/common'

const Chat = (props) => {
  const {name, messages} = props.chat;
  const [messageList, setMessageList] = useState([]); 
  
  
  function addMessage(author, text) {
    //console.log(props);
    setMessageList([...messageList, { author: author, text: text}])
  }

  const bot =() => {
    let text = 'Спасибо за отзыв';    
      addMessage(AUTHOR.bot, text);    
  }

  useEffect(() => {
    //getChatList();
      if(messageList.length && messageList[messageList.length-1].author !== AUTHOR.bot){
        let timerId = setTimeout(bot,1500);
        return ()=>{
          clearTimeout(timerId);
        }
      }
    
  });

  useEffect(()=>{
    //console.log(messages);
    setMessageList(messages)
  }, [messages])

    return (
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
        <h1>Chat: {name}</h1>
      <List className="message-list">
        {messageList.map((singlemessage, index)=> (<Message key={index} data={singlemessage}/>))}
      </List>
      <MessageInput addMessage={addMessage}/> 
      </Box>
    
    )

}

export default Chat;