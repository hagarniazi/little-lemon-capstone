import { useState } from "react";

function Login() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="login-page" aria-labelledby="login-title">
      <div className="page-intro">
        <p className="eyebrow">Welcome back</p>
        <h1 id="login-title">Login</h1>
        <p>This is a demo login for the Little Lemon capstone project.</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__field">
          <label htmlFor="login-email">Email</label>
          <input id="login-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="login-form__field">
          <label htmlFor="login-password">Password</label>
          <input id="login-password" name="password" type="password" autoComplete="current-password" required />
        </div>
        <button className="button button--primary" type="submit">Login</button>
        {submitted && <p className="login-form__message" role="status">Demo form submitted. No account was created.</p>}
      </form>
    </section>
  );
}

export default Login;