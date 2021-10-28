

import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './styles/theme';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes  from './routes'

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router history={createBrowserHistory()}>
          <Routes/>
        </Router>
    </ChakraProvider>
  );
}

export default App;
