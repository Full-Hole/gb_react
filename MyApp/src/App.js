

import './App.css';
import Container from '@mui/material/Container';
import Router from './pages/Router';
function App() {  
  return (
    <div className="App">
      <Container maxWidth="sm" sx={{display: 'flex'}}>
        <Router />
      </Container>
    </div>
);
}

export default App;


