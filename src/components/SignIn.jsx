import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    navigate("/lists");
  };
  return (
    <Form>
      <div className="text-center">
        <p>Sign in to your account</p>
      </div>
      <Form.Group className="mb-3" controlId="emailOrMobile">
        <Form.Control type="email" placeholder="Email Address or Mobile Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button type="submit" onClick={SignIn} className="btn btn-primary btn-block w-100 mb-3"> Sign In </button>
      <div className="text-center">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        <p>Forgot Password? <Link to="/forgot-password">Reset here</Link> </p> 
      </div>
    </Form>
  );
}

export default SignIn;
