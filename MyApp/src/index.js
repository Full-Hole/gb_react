import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  BrowserRouter,
   Routes,
  Route } from "react-router-dom";
import { orange } from '@mui/material/colors'; 
import Chats from './pages/Chats';
import Home from './pages/Home';
import Profile from './pages/Profile';

import {AUTHOR} from './constant/common'
//import reportWebVitals from './reportWebVitals';

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


const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    //mode: 'dark',
    background:{
      //default: '#001E3C'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
        <Route path="/" element={<App chatList={initialChats}/>}>
        <Route index element={<Home />} />
        <Route path="/chats" element={<Chats chatList={initialChats}/>}>
        <Route path=":chatId" element={<Chats chatList={initialChats}/>}/>
          </Route>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }/>
      </Route>
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
