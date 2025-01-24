import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./component/Header";
import Routing from './component/Routing';
import Footer from './component/Footer';
import MaybeShowNavbar from './component/MaybeShowNavbar/MaybeShowNavbar';

function App() {
  return (
    <div className="App">
      <MaybeShowNavbar>
        <Header />
      </MaybeShowNavbar>

      <Routing />

      <MaybeShowNavbar>
        <Footer />
      </MaybeShowNavbar>

    </div>
  );
}

export default App;
