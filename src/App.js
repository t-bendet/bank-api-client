import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import NewAccount from "./pages/NewAccount";
import Deposit from "./pages/Deposit";
import GetAccount from "./pages/GetAccount";
import GetAccounts from "./pages/GetAccounts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new/client" component={NewClient} />
          <Route exact path="/new/account" component={NewAccount} />
          <Route exact path="/deposit" component={Deposit} />
          <Route exact path="/account" component={GetAccount} />
          <Route exact path="/accounts" component={GetAccounts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
