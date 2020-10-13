import React from 'react';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author_id: Number(props.author_id)
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        // console.log("CONSTRUCTOR this.state:",this.state)
        // console.log("constructror this.props", this.props)
    }


    // componentWillUnmount() { this.props.clearSessionErrors() }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    // handleErrors() {
    //     if (this.props.errors === null) {
    //         return null
    //     }
    //     else {
    //         return (
    //             <ul>
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={`${i}`}>{error}</li>
    //                 ))}
    //             </ul>
    //         )
    //     }
    // }
    // handleSubmit(event) {

    //     event.preventDefault();


    //     const question = Object.assign({}, this.state, { author_id: this.props.author_id.id });
    //     this.props.receiveQuestion(question);
    //     this.setState({ body: '', title: '' });
    //     this.props.history.push('/');

    // }
    handleSubmit(e) {
        e.preventDefault();
        console.log("from handleSubmit this.props:", this.props)
        console.log("from handleSubmit this.state:", this.state)
        const question = Object.assign({}, this.state);//, { author_id: this.props.author_id.id });
        console.log("question", question)
        this.props.createQuestion(question);
        // this.props.history.push('/homePage');
        // this.setState({ body: '', title: '' });
        // this.props.history.push('/');
            // .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                {/* <div className="login-form-errors">{this.handleErrors()} </div>   */}
                {/* <span className="fab fa-stack-overflow"></span> */}
                <h2 className="queston-form">Create Question!</h2>
                <div >
                    <form>
                        <label>Question Title:
                        <input
                                type='text'
                                placeholder="enter question title"
                                value={this.state.title}
                                onChange={this.handleInput('title')}
                            />
                        </label>
                        <label>Body:
                        <textarea
                                placeholder="enter question body"
                                value={this.state.body}
                                onChange={this.handleInput('body')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Create Question</button>
                    </form>
                    {/* <div className="login-form-errors">{this.handleErrors()} </div> */}
                </div>
            </div>
        );
    }
};

export default QuestionForm;