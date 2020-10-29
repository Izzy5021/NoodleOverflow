export const newAnswer = answer => { 
    return $.ajax({
        url: '/api/answers',
        method: 'POST',
        data: { answer: answer }
    });
};

export const getAnswers = () => {
    return $.ajax({
        url: `/api/answers/`,
        method: 'GET'
    });
};

export const getAnswer = (id) => {
    return $.ajax({
        url: `/api/answers/${id}`,
        method: 'GET'
    });
};

export const updateAnswer = (id, answer) => {
    return $.ajax({
        url: `/api/answers/${id}`,
        method: 'PATCH',
        data: { answer: answer }
    });
};

export const deleteAnswer = (id) => {
    return $.ajax({
        url: `/api/answers/${id}`,
        method: 'DELETE'
    });
};