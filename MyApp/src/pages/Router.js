import {
    BrowserRouter,
    Routes,
    Route, Link as RouterLink
  } from "react-router-dom";
import Chats from './Chats';
import Home from './Home';
//import Default from './Default';
import Profile from './Profile';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
  //import App from './App';
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

const Router = () => {
    return  (
    <BrowserRouter>
     <List>
     <ListItemLink to="/" primary="Home" />
     <ListItemLink to="profile" primary="Profile" />
     <ListItemLink to="chats" primary="Chats" />
        </List>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chats" element={<Chats />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }/>
        </Routes>
    </BrowserRouter>
    )
};

export default Router;

//<Route path=":chatId" element={<Team />} />
//<Route path="new" element={<NewTeamForm />} />