/* eslint-disable no-unused-vars */
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import newUserSchema from "./models/userSchema";

const SignupForm = () => {
  return (
    <>
      <div className="container">
        <form id="signup-form" action="submit">
          <div className="username">
            <FaUser />
            <input required placeholder="Username" type="text" />
          </div>
          <div className="email">
            <MdEmail />
            <input
              required
              placeholder="Email"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="password">
            <RiLockPasswordLine />
            <input
              required
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button type="submit">Sign up</button>
          <div className="login">
            already have an account? <a href={`/`}>click here</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
