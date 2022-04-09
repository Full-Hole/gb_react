

import './App.css';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import { Outlet, Link as RouterLink } from "react-router-dom";

import * as React from 'react';


function App({chatList}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    //console.log(props);
    setOpen(!open);
  };


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
      <Container maxWidth="sm" sx={{display: 'flex'}}>
      <List>
        <ListItemLink to="/" primary="Home" />
        <ListItemLink to="profile" primary="Profile" />
        
        <ListItemButton onClick={handleClick}>
        <ListItemText primary="Chats" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.keys(chatList).map((id, key)=>(<ListItemLink to={'chats/'+id} primary={chatList[id].name} key={key}/>))}
          
        </List>
      </Collapse>
      </List>
      <Outlet />
        
      </Container>
    </div>
);
}

export default App;


