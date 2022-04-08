import {useState} from 'react';
//import Box from '@mui/material/Box';
//import List from '@mui/material/List';
import Chat from '../components/Chat';
import {AUTHOR} from '../constant/common'

const initialChats = {
    id1: {
        name: 'Chat 1',
        messages: [{ author: AUTHOR.bot, text: 'Welcome to Chat1'}]
    },
    id2: {
        name: 'Chat 2',
        messages: [{ author: AUTHOR.bot, text: 'Welcome to Chat2'}]
    }
}
const Chats = () => {
    const [chatList, setChatList] = useState([initialChats]);

    // const getChatList = () => {
    //     setChatList([{chatName: 'first', chatId: '1x'}, {chatName: 'second', chatId: '2x'}])
    //   }
    //   useEffect(() => {
    //     getChatList();
    //   }, []);
    return <div>Chats 
          <Chat />
    </div>
}
export default Chats;

