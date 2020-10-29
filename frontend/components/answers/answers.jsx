import React from 'react';


class AnswerPage extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            question_id : '',
            author_id: Number(props.author_id)
        };
        this.askQuestion = this.askQuestion.bind(this);
        // this.openQuestion = this.openQuestion.bind(this);
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
        componentDidMount() { this.props.fetchAnswers(), this.props.fetchQuestions()}
    
      askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    //     openQuestion(id) {
    //     // e.preventDefault();
    // //    return (e) => {
    // //         this.setState({ [type]: e.target.value });
    // //     };
    //     // this.props.showQuestion(id);
    //     this.props.history.push(`/showQuestion/${id}`);
    // }

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
        let answers = this.props.answers.arr ? this.props.answers.arr : [];
        let questions = this.props.questions.arr ? this.props.questions.arr : [];

        console.log("questions", questions)
        // let {questions} = this.props; 
        if( answers.length !==0 && questions.length !== 0 ){
            // console.log("questions from render", questions)
            console.log("get in there...:", this.props.currentUser.id)
            let myAnswers = []
            let myQuestions = []
            for ( let i = 0; i < answers.length; i++){
               let sub = {}
                if (answers[i].author_id === this.props.currentUser.id){
                    myAnswers.push(answers[i])
                    for( let j = 0; j < questions.length; j++){
                        if ( answers[i].question_id === questions[j].id){
                        myQuestions.push(questions[j]) 
                        }
                    }
                    
                }
            }
            console.log("props", this.props)
            console.log("myAnswers", myAnswers)
            console.log("myQuestions", myQuestions)
            const user = this.props.currentUser.username
            return (
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">My Answers</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    {
                        myAnswers.map((answer, i) => {
                            return (
                                <div className="questions-show" key={i} >
                                    <br/>
                                    <br/>
                                    <h3>Question</h3>
                                    <h4>{myQuestions[i].title}</h4>
                                    <h4>{myQuestions[i].body}</h4>
                                    <br/>
                                    <h3>{user}'s Answer</h3>
                                    <h3>{answer.body}</h3>
                                    <br/>
                                    <br/>
                                
                                </div>
                            )
                        })
                    }
                </div>
            );
        }else{
            return(
                <div>
                    <div className="sidenav">
                        <a href="#about">About</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/newQuestion">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Top Questions</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    <div>Questions Loading ......</div>
                </div>
                
            )
        }
    }
};

export default AnswerPage;