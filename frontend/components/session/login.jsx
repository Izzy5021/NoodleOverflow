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
        this.handleDemo = this.handleDemo.bind(this);


    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    componentWillUnmount(){
     
        this.props.clearSessionErrors()}

    componentDidMount(){
       

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

    handleDemo(e){
        e.preventDefault();
        this.props.login({
            email: "test89@test.com",
            password: "1234567890"
        }).then(() => this.props.history.push("/"));
    }


    render() {
        return (
            <div>
            <div className="login-form-errors">{this.handleErrors()} </div>
                <h2 className="login">Log In!</h2>
            <div className='container'>
                <form>
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
                    <button onClick={this.handleSubmit}>Log in</button>

                    {/* 0 */}
                </form>
            </div>
            </div>
        );
    }
};

export default Login;