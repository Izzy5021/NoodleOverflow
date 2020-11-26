import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        
        if (this.props.errors === null ){
            return null
        }
        else {   
            return(
                <ul>
                    {this.props.errors.map((error,i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ul>
            )
         }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/homePage'));
    }

    handleDemo(e){
        //e.preventDefault();
        const demoUser = {
            email: "test89@test.com",
            password: "1234567890"
         }
        console.log(this.props.history) 
        this.props.login(demoUser)
            .then(() => this.props.history.push('/homePage'));
        console.log('JHelloooo',this.props.history) 

    }


    render() {
        return (
            <div>
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

                </form>
                <div className="login-form-errors">{this.handleErrors()} </div>
            </div>

            </div>
        );
    }
};

export default Login;