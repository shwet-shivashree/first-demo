import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Main from "./components/Main";
import Service from "./components/Service";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PremiumForm from "./components/PremiumForm";
import Footer from "./components/Footer";
import Res from "./components/Res";
import BuyForm from "./components/Buy/BuyForm";
import LoginForm from "./components/LoginRegister/LoginForm";
import List from "./components/List";
import CheckOut from "./components/CheckOut";
import LoggedInComponent from "./components/LoggedInComponent";
function App() {
  return (
    <div className="App">
      <Header />

      {/* <Main/>
     <Service/>
     <Aboutus /> */}

      <Router>
        <Route path="/" component={Main} exact />
        <Route path="/about" component={Aboutus} exact />
        <Route path="/services" component={Service} exact />
        <Route path="/login" component={LoginForm} exact />
        <Route path="/premium" component={PremiumForm} exact />
        <Route path="/res" component={Res} exact />
        <Route path="/buy" component={BuyForm} />
        <Route path="/List" component={List}></Route>
        <Route path="/Checkout" component={CheckOut}></Route>
        <Route path="/loggedIn" component={LoggedInComponent}></Route>
        {/* <Route path="/buy1" component={BuyForm1} />
        <Route path="/buy2" component={BuyForm2} /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
