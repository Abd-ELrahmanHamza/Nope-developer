// Import CSS
import "./SignUp.css";

// Import hooks
import { useState } from "react";

// Import react router dom components
import BACKEND from "../../Helpers/EndPoint";

/**
 * SignUp component
 *
 * @Component
 * @param {Function} toggleSign function to toggle the sign up to sign in
 * @returns {React.Component} SignUp component
 */
const SignUp = ({ toggleSign }) => {
  // Username state
  const [userName, setUserName] = useState("");

  // Email state
  const [email, setEmail] = useState("");

  // Password state
  const [password, setPassword] = useState("");

  // A state to check if the data is loading
  const [isPending, setIsPending] = useState(false);

  // A state to store the error
  const [error, setError] = useState(null);

  // Handle signup
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a user object
    const user = { userName, email, password };

    // A function to handle the response
    const afterFetch = (response) => {
      if (!response.ok) {
        return response.text();
      }
      setIsPending(false);
      setError(null);
      toggleSign();
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
      `${BACKEND}api/Users/register/`,
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(user),
      },
      { signal: abortController.signal }
    )
      .then(afterFetch)
      .then((errorText) => {
        throw Error(errorText);
      })
      .catch(handleFetchError);
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
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
            Sign up
          </button>
        )}
        {!isPending && (
          <button type="submit" onClick={handleSubmit}>
            Sign up
          </button>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </form>
    </div>
  );
};

export default SignUp;
