import React from 'react';

function Login() {
  // Your login form JSX here
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
