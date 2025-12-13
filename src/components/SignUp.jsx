import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();

  const SignUp = (e) => {
    e.preventDefault();
    navigate("/lists");
  };
  return (
        <Form>
           <div className="text-center">
            <p>Join our platform to manage complaints</p>
          </div>
          <Form.Group className="mb-3" controlId="formGroupUserType">
            <Form.Check inline type="radio" label="Customer" name="userType" id="customerRadio" />
            <Form.Check inline type="radio" label="Dealer" name="userType" id="dealerRadio" />
            <Form.Check inline type="radio" label="Engineer" name="userType" id="engineerRadio" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMobile">
            <Form.Control type="text" placeholder="Mobile Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <button type="submit" onClick={SignUp} className="btn btn-primary btn-block w-100 mb-3">Sign Up</button>
          <div className="text-center"> Already have an account? {" "}  <Link to="/signin">Sign in</Link> </div>
        </Form>
  );
}

export default SignUp;
