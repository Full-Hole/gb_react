import './App.css';
import {
  Container,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Outlet } from "react-router-dom";
import React from 'react';
import ChatListController from './components/ChatListController';
import ListItemLink from './components/ListItemLink';



function App() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ display: 'flex' }}>
        <List>          
          <ListItemLink to="/" primary="Home" />
          <ListItemLink to="profile" primary="Profile" />
          <ListItemLink to="login" primary="Login" />
          <ListItemLink to="registration" primary="Registration" />
          <ListItemLink to="gists" primary="Gists" />
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Chats" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" /*unmountOnExit*/ >
            <ChatListController />
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