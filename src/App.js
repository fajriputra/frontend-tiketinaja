import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import ForgotPassword from "pages/ForgotPassword";
import DetailPage from "pages/DetailPage";
import OrderPage from "pages/OrderPage";
import PaymentPage from "pages/PaymentPage";
import TicketResult from "pages/TicketResult";
import ProfilePage from "pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/sign-up" exact component={RegisterPage} />
          <Route path="/sign-in" exact component={LoginPage} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/detail-movie/:movieId" exact component={DetailPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/payment" exact component={PaymentPage} />
          <Route path="/ticket" exact component={TicketResult} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
