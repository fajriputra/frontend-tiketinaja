import { BrowserRouter as Router, Switch } from "react-router-dom";

import Homepage from "pages/Homepage";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import ForgotPassword from "pages/ForgotPassword";
import DetailPage from "pages/DetailPage";
import OrderPage from "pages/OrderPage";
import PaymentPage from "pages/PaymentPage";
import TicketResult from "pages/TicketResult";
import ProfilePage from "pages/ProfilePage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import Movie from "pages/Admin/CrudMovie";
import Schedule from "pages/Admin/Schedule";
import Dashboard from "pages/Admin/Dashboard";
import ActivateEmail from "pages/ActivateEmail";
import AdminRoute from "components/AdminRoute";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Homepage} />
          <PublicRoute
            path="/sign-up"
            restricted={true}
            exact
            component={RegisterPage}
          />
          <PublicRoute
            path="/auth/activation/:activation_token"
            restricted={true}
            exact
            component={ActivateEmail}
          />
          <PublicRoute
            path="/sign-in"
            restricted={true}
            exact
            component={LoginPage}
          />
          <PublicRoute
            path="/forgot-password"
            restricted={true}
            exact
            component={ForgotPassword}
          />
          <PrivateRoute
            path="/detail-movie/:movieId"
            exact
            component={DetailPage}
          />
          <PrivateRoute path="/order" exact component={OrderPage} />
          <PrivateRoute
            path="/detail-movie/:movieId"
            exact
            component={DetailPage}
          />
          <PrivateRoute path="/payment" exact component={PaymentPage} />
          <PrivateRoute
            path="/ticket/:bookingId"
            exact
            component={TicketResult}
          />
          <PrivateRoute path="/profile" exact component={ProfilePage} />

          {/* admin route */}
          <AdminRoute path="/movie" exact component={Movie} />
          <AdminRoute path="/schedule" exact component={Schedule} />
          <AdminRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
      <ToastContainer pauseOnHover={false} autoClose={3000} />
    </div>
  );
}

export default App;
