import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
   

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleErrors() {
        if (this.props.errors === null) {
            return null
        }
        else {
            return (
                <ul>
                    {this.props.errors.map((error,i) => (
                        <li key={`${i}`}>{error}</li>
                    ))}
                </ul>
            )
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push('/homePage'));
    }

    render() {
        return (
            <div>
                    <h2 className="signup">Sign Up!</h2>
                <div className='container'>
                    <form>
                        <label>Username:
                        <input
                                className="loginsignup-inputs"
                                type='text'
                                placeholder="enter username"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                        <label>Email:
                        <input
                                className="loginsignup-inputs"
                                type='text'
                                placeholder="enter email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                        <input
                                type='password'
                                className="loginsignup-inputs"
                                placeholder="enter password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button className="auth-button" onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                    <div className="login-form-errors">{this.handleErrors()} </div>
                </div>
            </div>
        );
    }
};

export default Signup;