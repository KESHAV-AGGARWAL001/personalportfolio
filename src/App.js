import { useEffect, useState } from 'react';
import './App.css';
import ComponentRender from './ComponentRender';
import Loader from './Components/Loader';

function App() {
  const [timing, setTiming] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTiming(false);
    }, 7000);
  })
  return (
    <>
      {timing && <Loader />}
      {!timing && <ComponentRender />}
    </>
  );
}

export default App;
