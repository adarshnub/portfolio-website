import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
    <Navbar className="z-20" />
    <Home className="z-10" />
    </div>
  );
}

export default App;
