
//import Box from '@mui/material/Box';
//import List from '@mui/material/List';
import Chat from '../components/Chat';

import {useParams } from "react-router-dom";


const Chats = ({chatList}) => {
    let { chatId} = useParams();
    

    if(!chatList[chatId]) {
        return (<div>404</div>);
    }


    // const getChatList = () => {
    //     setChatList([{chatName: 'first', chatId: '1x'}, {chatName: 'second', chatId: '2x'}])
    //   }
    //   useEffect(() => {
    //     getChatList();
    //   }, []);
    return <div>
          <Chat chat={chatList[chatId]}/>
    </div>
}
export default Chats;

