import { useState } from 'react';

import './App.css';

function App() {
  const [messageList, setMessage] = useState([]);
//{ author: '', text: ''}
  function addMessage(){
    setMessage()
  }
  return (
    <div className="App">
      {messageList.map((message)=> <div>{message}</div>)}
      <form>
      <label htmlFor="author">Автор</label><input type="text" name="author" id="author"/>
      <label htmlFor="text">Сообщение</label><textarea name="text" id="text"></textarea>
      <input type="submit" name="submit" id="submit"/>
      </form>
    </div>
  );
}

export default App;
