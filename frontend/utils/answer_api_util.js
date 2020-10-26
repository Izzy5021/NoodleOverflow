export const newAnswer = answer => { 
    return $.ajax({
        url: '/api/answers',
        method: 'POST',
        data: { answer: answer }
    });
};

// export const getAnswers = (question_id) => {
//     return $.ajax({
//         url: `/api/questions/${question_id}`,
//         method: 'GET'
//     });
// };

export const getAnswer = (id) => {
    return $.ajax({
        url: `/api/answers/${id}`,
        method: 'GET'
    });
};