import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./User.module.css";
import { useCities } from "../contexts/CitiesContext";

function User() {
  const { resetCities } = useCities();
  const {
    session: { user },
    signOut,
  } = useAuth();
  const navigate = useNavigate();

  if (!user) return;

  function handleLogout() {
    resetCities();
    signOut();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      {/* <img src={user.avatar} alt={user.name} /> */}
      <span>Logged in as: {user.email}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
