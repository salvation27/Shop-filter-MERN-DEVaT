import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/Pages'

function App(props) {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <MainPage />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
