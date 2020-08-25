import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.errors)
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
   
    // componentWillUnmount() { this.props.clearSessionErrors() }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleErrors() {
        console.log(this.props.errors)
        if (this.props.errors === null) {
            console.log('if')
            return null
        }
        else {
            console.log('else')
            return (
                <ul>
                    {this.props.errors.map(error => (
                        <li>{error}</li>
                    ))}
                </ul>
            )
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                {/* <div className="login-form-errors">{this.handleErrors()} </div>   */}
                {/* <span className="fab fa-stack-overflow"></span> */}
                    <h2 className="signup">Sign Up!</h2>
                <div className='container'>
                    <form>
                        <label>Username:
                        <input
                                type='text'
                                placeholder="enter username"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                        <label>Email:
                        <input
                                type='text'
                                placeholder="enter email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                        <input
                                type='password'
                                placeholder="enter password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                    <div className="login-form-errors">{this.handleErrors()} </div>
                </div>
            </div>
        );
    }
};

export default Signup;