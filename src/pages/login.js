import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";
import logo from "../assets/crown.svg";
import classnames from "classnames";



class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

 
  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated){
        this.props.history.push("/dashboard");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const error = {};
    const {email, password} = this.state;
    if(email === ""){
        error.email = "Field is required";
    }
    if(password === "")
        error.email = "Field is required";
    this.setState({errors : error});

    if(email === "" || password === "")
        return 0;
    
    this.props.login(this.state);
  };

  render() {
    const { errors } = this.state;
    return (
        <div className='auth-wrapper'>
          <div className='auth-content'>
            <div className='auth-bg'>
              <span className='r' />
              <span className='r s' />
              <span className='r s' />
              <span className='r' />
            </div>
            <div style = {{width: "40%" , margin: "0 auto", marginTop: 130}}className='card'>
              <div className='card-body text-center'>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className='mb-4'>
                    <img
                      style={{ width: "100", height: "100" }}
                      src={logo}
                      alt='Logo'
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      className={classnames("form-control", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                      id='email'
                      type='email'
                      placeholder='Email...'
                    />
                  </div>
                  <div style={{ color: "red" }}>
                    {this.state.errors.email || this.state.errors.emailnotfound}
                  </div>
                  <div className='input-group mb-4'>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id='password'
                      type='password'
                      placeholder='Password...'
                      className={classnames("form-control", {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />
                  </div>
                  <div style={{ color: "red" }}>
                    {this.state.errors.password ||
                      this.state.errors.passwordincorrect}
                  </div>
                  <button
                    className='btn btn-danger btn-lg btn-block '
                    type='submit'
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(SignIn);