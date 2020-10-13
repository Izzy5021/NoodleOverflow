import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log("state is:", this.props)
        this.askQuestion = this.askQuestion.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
        // console.log("CONSTRUCTOR this.state:",this.state)
        // console.log("constructror this.props", this.props)
    }


    // componentWillUnmount() { this.props.clearSessionErrors() }

    // handleInput(type) {
    //     return (e) => {
    //         this.setState({ [type]: e.target.value });
    //     };
    // }
        componentDidMount() { this.props.fetchQuestions()}
    
      askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("from handleSubmit this.props:", this.props)
    //     console.log("from handleSubmit this.state:", this.state)
    //     const question = Object.assign({}, this.state);//, { author_id: this.props.author_id.id });
    //     console.log("question", question)
    //     this.props.createQuestion(question);
    //     // this.setState({ body: '', title: '' });
    //     // this.props.history.push('/');
    //         // .then(() => this.props.history.push('/'));
    // }

    render() {
        let questions = Object.values(this.props.questions)
        console.log("questions from render", questions)
        console.log("get in there...:", questions[0])
        return (
            <div>
                <div className="sidenav">
                    <a href="#about">About</a>
                    <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                    <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                    <a href="#/newQuestion">New Question</a>
                </div>
                <h2 className="home-h2">Top Questions</h2>
                <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                 {
                        questions.map((question, i) => {
                            return (
                                <div key={i} >{question[i]}</div>
                            )
                        })
                    }
            </div>
        );
    }
};

export default HomePage;