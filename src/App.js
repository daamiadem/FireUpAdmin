import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Investor from "./pages/Investor/Investor";
import Coach from "./pages/Coach/Coach";
import Entrepreneur from "./pages/Entrepreneur/Entrepreneur";
import ProductList from "./pages/ProjectList/ProjectList";
import Product from "./pages/project/Project";
import NewProduct from "./pages/newProject/NewProject";
import InvestorList from './pages/InvestorList/InvestorList'
import CoachList from './pages/CoachList/CoachList'
import EntrepreneurList from './pages/EntrepreneurList/EntrepreneurList'
import InvestementList from './pages/investementList/investementList'


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/Investors">
            <InvestorList />
          </Route>
          <Route path="/Investment">
            <InvestementList />
          </Route>
          <Route path="/Entrepreneurs">
            <EntrepreneurList />
          </Route>
          <Route path="/Coachs">
            <CoachList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/Investor/:InvestorId">
            <Investor />
          </Route>
          <Route path="/Entrepreneur/:EntrepreneurId">
            <Entrepreneur />
          </Route>
          <Route path="/Coach/:CoachId">
            <Coach />
          </Route>
        
          <Route path="/projects">
            <ProductList />
          </Route>
          <Route path="/Project/:ProjectId">
            <Product />
          </Route>
          <Route path="/newProject">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
