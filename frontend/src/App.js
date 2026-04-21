import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import Register from "./Register";
import Home from "./Home";
import AdminBookings from "./AdminBookings";
import AdminEnquiries from "./AdminEnquiries";
import AdminQuotes from "./AdminQuotes";
import AdminServices from "./AdminServices";
import CustAuth from "./CustAuth";
import CustOrders from "./CustOrders";
import CustProfile from "./CustProfile";
import CustServices from "./CustServices";


/*
  Context for login state:
  The LoginContext is a React context that holds the login state and a function to update it.
  This context allows you to share and update the login state (and the function to change it) 
  across your React component tree
*/
export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  role: null,
  setRole: () => {},
});

function Sidebar({ setEmail, setPassword }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedIn, role, setLoggedIn, setRole } = useContext(LoginContext);
  const isHomePage =
    location.pathname === "/" || location.pathname === "/login";
  const disableMenu = !loggedIn && isHomePage;

  // Logout handler
  const handleLogout = () => {
    setLoggedIn(false);
    setRole(null);
    if (setEmail) setEmail("");
    if (setPassword) setPassword("");
    navigate("/login");
  };

  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <button
              style={{ width: "100%", textAlign: "left" }}
              disabled={disableMenu}
            >
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button
              style={{ width: "100%", textAlign: "left" }}
              disabled={disableMenu}
            >
              Login
            </button>
          </Link>
        </li>
        {/* Admin menu items */}
        {loggedIn && role === "admin" && (
          <li>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <button style={{ width: "100%", textAlign: "left" }}>
                  Admin
                </button>
              </Link>
              <ul
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <Link to="/admin/bookings">
                    <button
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "2.5rem",
                      }}
                    >
                      Bookings
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/enquiries">
                    <button
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "2.5rem",
                      }}
                    >
                      Enquiries
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/quotes">
                    <button
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "2.5rem",
                      }}
                    >
                      Quotes
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/services">
                    <button
                      style={{
                        width: "100%",
                        textAlign: "left",
                        paddingLeft: "2.5rem",
                      }}
                    >
                      Services
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        )}
        {/* Customer menu items */}
        {loggedIn && role === "customer" && (
          <>
            <li>
              <Link to="/customer">
                <button style={{ width: "100%", textAlign: "left" }}>
                  Customer
                </button>
              </Link>
            </li>
            <ul
              style={{
                width: "100%",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link to="/customer/auth">
                  <button
                    style={{
                      width: "100%",
                      textAlign: "left",
                      paddingLeft: "2.5rem",
                    }}
                  >
                    Auth
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/customer/orders">
                  <button
                    style={{
                      width: "100%",
                      textAlign: "left",
                      paddingLeft: "2.5rem",
                    }}
                  >
                    Orders
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/customer/profile">
                  <button
                    style={{
                      width: "100%",
                      textAlign: "left",
                      paddingLeft: "2.5rem",
                    }}
                  >
                    Profile
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/customer/services">
                  <button
                    style={{
                      width: "100%",
                      textAlign: "left",
                      paddingLeft: "2.5rem",
                    }}
                  >
                    Services
                  </button>
                </Link>
              </li>
            </ul>
          </>
        )}
        {/* Logout button for logged in users */}
        {loggedIn && (
          <li style={{ marginTop: "auto" }}>
            <button
              style={{ width: "100%", textAlign: "left", color: "red" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

/*  
  App is the main/root component that manages global state (like login, role, email, password), 
  provides context, and sets up routing for the application. 
  It renders Sidebar and the main content area.
*/
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Global keyboard shortcut for logout (Ctrl+L)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        if (loggedIn) {
          setLoggedIn(false);
          setRole(null);
          setEmail("");
          setPassword("");
          navigate("/login");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loggedIn, setLoggedIn, setRole, setEmail, setPassword, navigate]);

  /* 
    [loggedIn, setLoggedIn, setRole, setEmail, setPassword, navigate] is a 
    Dependency array for the useEffect hook. It tells React to re-run the useEffect hook whenever any of 
    these variables or functions change. 
    In this context, it ensures that the keydown event handler always has access to the latest values 
    for login state, role, email, password, and navigation, so the logout shortcut (Ctrl+L) works 
    correctly as your app state changes.
  */
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, role, setRole }}>
      <div className="App" style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar setEmail={setEmail} setPassword={setPassword} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<div>Admin Page</div>} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/enquiries" element={<AdminEnquiries />} />
            <Route path="/admin/quotes" element={<AdminQuotes />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/customer" element={<div>Customer Page</div>} />
            <Route path="/customer/auth" element={<CustAuth />} />
            <Route path="/customer/orders" element={<CustOrders />} />
            <Route path="/customer/profile" element={<CustProfile />} />
            <Route path="/customer/services" element={<CustServices />} />
          </Routes>
        </main>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
