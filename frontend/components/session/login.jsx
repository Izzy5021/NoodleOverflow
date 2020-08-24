import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',
            email: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    componentWillUnmount(){
        console.log("component will unmount")
        this.props.clearSessionErrors()}

    componentDidMount(){
        console.log("component will mount")

        this.props.clearSessionErrors()}

    
    handleErrors(){
        console.log(this.props.errors)
        if (this.props.errors === null ){
         
            return null
        }
        else {
            console.log('else')
            return(
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
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
            <div className="login-form-errors">{this.handleErrors()} </div>
            <div className='session-form'>
                <h2>Log In!</h2>
                <form>
                    <label>Email:
                    <input
                            type='text'
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                    <input
                            type='password'
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log in</button>
                </form>
            </div>
            </div>
        );
    }
};

export default Login;