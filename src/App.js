import './App.css';
import Content from './Components/Content';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className="d-flex">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;