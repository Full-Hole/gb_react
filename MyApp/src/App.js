import './App.css';
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  DialogTitle,
  Dialog,
  Collapse,
  Button
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Outlet, Link as RouterLink } from "react-router-dom";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from './store/chats/action';



function App() {
  const chats = useSelector((state) => state.chats)
  const [open, setOpen] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [chatName, setChatName] = React.useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(chats);
    setOpen(!open);
  };
  const handleAddChatDialog = () => {
    setVisible(true);
  }
  const handleDialogClose = () => {
    setVisible(false);
    setChatName('');
  }
  const handleChatName = (e) => {
    setChatName(e.target.value);
  }
  const handleAddNewChat = () => {
    dispatch(addChat(chatName));
    handleDialogClose();

  }

  function ListItemLink(props) {
    const { icon, primary, to } = props;
    const renderLink = React.useMemo(
      () =>
        React.forwardRef(function Link(itemProps, ref) {
          return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
        }),
      [to],
    );
    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ display: 'flex' }}>
        <List>
          <ListItemLink to="/" primary="Home" />
          <ListItemLink to="profile" primary="Profile" />
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Chats" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {chats.chatList.map((chat) => (<ListItemLink to={'chats/' + chat.id} primary={chat.name} key={chat.id} />))}
              <ListItemButton onClick={handleAddChatDialog}><ListItemText primary="Add Chat" /></ListItemButton>
              <Dialog open={visible} onClose={handleDialogClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField
                  placeholder="Chat name"
                  value={chatName}
                  onChange={handleChatName} />
                <Button variant="contained" onClick={handleAddNewChat}>Сохранить</Button>
              </Dialog>
            </List>
          </Collapse>
        </List>
        <Outlet />

      </Container>
    </div>
  );
}

export default App;


//{Object.keys(chatList).map((id, key) => (<ListItemLink to={'chats/' + id} primary={chatList[id].name} key={key} />))}
//context={[chatList, addMessage]}