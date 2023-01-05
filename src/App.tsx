import { useState } from 'react'
import { Navbar, Main, ApiStateProvider } from './components';
// import Sidebar from './components/Sidebar';
import "./App.css";
// import {  } from './components';

function App() {
  const [count, setCount] = useState(0)
  const [channel, setChannel] = useState("top 10 trending news");

  return (
    <ApiStateProvider>
      <Navbar selectedChannel={channel} setSelectedChannel={setChannel} />
      <Main selectedChannel={channel} setSelectedChannel={setChannel} />
    </ApiStateProvider>
  )
}

export default App;
