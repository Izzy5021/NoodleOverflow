import React from 'react'
// import VideoIndexItem from '../VideosIndex/videoIndexItem'

class SearchPage extends React.Component{
     constructor(props) {
        super(props);
         this.state = {
            question_id : '',
            author_id: Number(props.author_id)
        };
        this.askQuestion = this.askQuestion.bind(this);
        this.openQuestion = this.openQuestion.bind(this);
     
    }

    componentDidMount() { this.props.fetchQuestions()}
    
    askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    openQuestion(id) {
    
        this.props.history.push(`/showQuestion/${id}`);
    }

    render() {
          
       
        let search = this.props.location.pathname.slice(8)
        console.log(search)
        
        let questions = this.props.questions.arr ? this.props.questions.arr : [];
        console.log("questions from render", questions)
        if( questions.length !==0 ){
                
            let searchQuestions = questions.filter(question =>(
                question.title.toLowerCase().includes(search.toLowerCase())
            ));

            console.log("searchQuestions:", searchQuestions)
            if (searchQuestions.length !== 0){
                return (
                    <div>
                        <div className="sidenav">
                            <a href="#/homePage">Home</a>
                            <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                            <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                            <a href="#/answerPage">My Answers</a>
                            <a href="#/newQuestion">New Question</a>
                        </div>
                        <h2 className="home-h2">Top Questions</h2>
                        <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                            <br/>
                            <br/>
                        <strong className='search-label'>Your Search: {search}</strong>
                        <div >
                                {
                                    searchQuestions.map((question, i )=> (
                                        <div className="questions-show" key={i} >
                                            <br/>
                                            <br/>
                                            <div className="float-child">
                                            <button  className="button-link" value={this.state.body}
                                                onClick={() => this.openQuestion(question.id)}> {question.title}
                                            </button>
                                            </div>
                                            <div className="float-child-r">
                                            asked by {question.username},&nbsp;  
                                                <br/>
                                                {question.created_at}
                                            </div>
                                            <br/>
                                            <br/>
                                   
                                        </div>
                                        
                                    ))
                                }
    
                                
                                
                        </div>
                    </div>
                );

            }else{
                return (
                    <div>
                        <div className="sidenav">
                            <a href="#/homePage">Home</a>
                            <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                            <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                            <a href="#/answerPage">My Answers</a>
                            <a href="#/newQuestion">New Question</a>
                        </div>
                        <h2 className="home-h2">Top Questions</h2>
                        <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                            <br/>
                            <br/>
                        <strong className='search-label'>Your Search: {search}</strong>
                    </div>
                );
            }
        }else{
            return(
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Top Questions</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    <div>Questions Loading ......</div>
                </div>
                
            )
        }
    }
}

export default SearchPage;