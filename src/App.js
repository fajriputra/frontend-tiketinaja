import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import LoginPage from "pages/Login";
import DetailPage from "pages/DetailPage";
import OrderPage from "pages/OrderPage";
import PaymentPage from "pages/PaymentPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/sign-in" exact component={LoginPage} />
          <Route path="/detail-movie" exact component={DetailPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/payment" exact component={PaymentPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
