// Import CSS
import "./Login.css";

// Import hooks
import { useState } from "react";

// Import react router dom components
import { useNavigate } from "react-router-dom";

// Import custom hooks
import { useAuth } from "../../Authentication/Authentication";
import BACKEND from "../../Helpers/EndPoint";

/**
 * Login component
 * @Component
 * @returns {React.Component} Login component
 */
const Login = () => {
  // Username state
  const [userName, setUserName] = useState("");

  // Password state
  const [password, setPassword] = useState("");

  // A state to check if the data is loading
  const [isPending, setIsPending] = useState(false);

  // A state to check if there is an error
  const [error, setError] = useState(null);

  // Authenticated user
  const auth = useAuth();

  // Navigate hook
  const navigate = useNavigate();

  // Handle login
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { userName, password };
    const afterFetch = (response) => {
      if (!response.ok) {
        return response.text();
      }
      setIsPending(false);
      setError(null);
      return response.json();
    };

    // handle error
    const handleFetchError = (error) => {
      if (error.name === "AbortError") return;
      setError(error.message);
      setIsPending(false);
    };

    setIsPending(true);

    const abortController = new AbortController();

    fetch(
      `${BACKEND}api/Users/login/`,
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(user),
      },
      { signal: abortController.signal }
    )
      .then(afterFetch)
      .then((rep) => {
        // Means there is an error
        if (typeof rep === "string" || rep instanceof String) throw Error(rep);
        else {
          // No error
          // Set the token
          auth.login({
            userName,
            token: rep.token,
            expiration: rep.expiration,
          });
          // Navigate to the Dashboard page
          navigate("/Dashboard", { replace: true });
        }
      })
      .catch(handleFetchError);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPending && (
          <button disabled style={{ backgroundColor: "gray" }}>
            Login
          </button>
        )}
        {!isPending && (
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </form>
    </div>
  );
};
export default Login;
