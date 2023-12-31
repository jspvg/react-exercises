import { useState } from "react";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email && !password && !passwordConfirm) {
      setError("Fields must not be empty.");
      setSuccess("");
      return;
    }

    if (!email || email.indexOf("@") === -1) {
      setError("Invalid email address.");
      setSuccess("");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
      return;
    }

    if (password !== passwordConfirm) {
      setError("Password confirmation must be the same as the password.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Form submitted!");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <>
      <h3>TASK</h3>
      <p>Validate a user sign-up form once the user submits the form</p>
      <h4>Requirements</h4>
      <ul>
        <li>
          the email, password, and password confirmation fields are filled in
        </li>
        <li>the email field must have exactly one @sign in it</li>
        <li>the password must be eight or more characters long</li>
        <li>the password and password confirmation must be the same</li>
        If any of those conditions aren't met, display an error, if they are all
        met display a sucess message
        <li></li>
      </ul>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password-confirm">Confirm Password </label>
        <input
          type="password"
          id="password-confirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormValidator;
