import React from "react";
import {
  Route,
  Navigate,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import MenuItem from "../components/MenuItems";
import Cart from "../components/Cart";
import WelcomeScreen from "../components/WelcomeScreen";
import ScanQR from "../components/ScanQR";
import ThankYou from "../components/Thankyou";
import Order from "../components/Order";
import { createBrowserHistory } from "history";
import { useAuth, useCart, useMenu } from "../store/hooks";

const history = createBrowserHistory({ window });

export const UIRoute = () => {
  const auth = useAuth();
  const { menuItems, getMenuItems } = useMenu();
  const { addToCart, cart } = useCart();
  return (
    <HistoryRouter history={history}>
      <Routes>
        {auth.user ? (
          <>
            <Route
              path="/menu"
              exact
              element={
                <MenuItem
                  history={history}
                  auth={auth}
                  addToCart={addToCart}
                  cart={cart}
                  menuItems={menuItems}
                  getMenuItems={getMenuItems}
                />
              }
            />
            <Route
              path="/cart"
              exact
              element={<Cart history={history} auth={auth} />}
            />

            <Route
              path="/order"
              exact
              element={<Order history={history} auth={auth} />}
            />

            <Route path="*" element={<Navigate to="/menu" />} />
          </>
        ) : (
          <>
            <Route
              path="/welcome/:tableID"
              element={<WelcomeScreen history={history} />}
            />
            <Route path="/scan-qr" element={<ScanQR />} />
            <Route path="*" element={<Navigate to="/scan-qr" />} />
          </>
        )}
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/thank-you" />} />
      </Routes>
    </HistoryRouter>
  );
};
