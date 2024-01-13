import './App.css';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import Cursor from './Components/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <div className="d-flex">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;