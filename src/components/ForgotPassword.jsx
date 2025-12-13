import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const ForgotPassword = () => {
  return (
    <Form>
      <div className="text-center">
        <p>Forgot Password?</p>
      </div>
      <Form.Group className="mb-3" controlId="emailOrMobile">
        <Form.Control type="email" placeholder="Email Address or Mobile Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button type="submit"  className="btn btn-primary btn-block w-100 mb-3"> Reset Password </button>
      <div className="text-center">
        <p>back to <Link to="/">Sign in</Link> or <Link to="/signup">Sign up</Link></p>
      </div>
    </Form>
  )
}
