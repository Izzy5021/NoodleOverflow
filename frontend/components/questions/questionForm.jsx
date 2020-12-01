import React from 'react';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author_id: Number(props.author_id),
            username: props.username 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        console.log("CONSTRUCTOR this.state:",this.state)
        console.log("constructror this.props", this.props)
    }



    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

  
    handleSubmit(e) {
        e.preventDefault();
        console.log("from handleSubmit this.props:", this.props)
        console.log("from handleSubmit this.state:", this.state)
        const question = Object.assign({}, this.state)
        console.log("question", question)
        this.props.createQuestion(question)
            .then(() => {
                 this.props.history.push('/homePage')
            })
       
      
    }

    render() {
        return (
            <div>
               
                  <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                <h2 className="question-form-header">Ask Question!</h2>
                <div className="question-form">
                    <form className="form">
                        <label >Question Title:
                        <input
                                type='text'
                                className="q-label"
                                placeholder="enter question title"
                                value={this.state.title}
                                onChange={this.handleInput('title')}
                            />
                        </label>
                        <label>Body:
                        <textarea
                                className="q-label"
                                placeholder="enter question body"
                                value={this.state.body}
                                onChange={this.handleInput('body')}
                            />
                        </label>
                        <button className="update-button" onClick={this.handleSubmit}>Create Question</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default QuestionForm;