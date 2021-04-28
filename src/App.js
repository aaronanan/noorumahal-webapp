import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main'
import SideBar from './components/Main/SideBar'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
