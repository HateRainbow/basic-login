/* eslint-disable react/no-unescaped-entities */
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form id="login-form" type="submit">
        <div className="container">
          <div className="email">
            <MdEmail />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </div>
          <div className="password">
            <RiLockPasswordLine />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>
          <div className="login-btn">
            <button id="login-btn" type="submit">
              Login
            </button>
          </div>
          <div className="">
            <input type="checkbox" defaultChecked />
            Remember me
          </div>
          <div className="forgot-password">
            Forgot <a href={`/signup`}>password?</a>
          </div>
          <div className="signup">
            Don't have an account <a href={`/signup`}>click here</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
