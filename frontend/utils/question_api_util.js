export const postQuestion = question => { 
    return $.ajax({
        url: '/api/questions',
        method: 'POST',
        data: { question: question }
    });
};

export const getQuestions = () => {
    return $.ajax({
        url: '/api/questions',
        method: 'GET'
    });
};

export const getQuestion = (id) => {
    return $.ajax({
        url: `/api/questions/${id}`,
        method: 'GET'
    });
};