

// export const upVote = (answerId, userId, value) => {
//     return $.ajax({
//         url: 'api/votes',
//         method: 'POST', 
//         data: { answerId: answerId, userId: userId, value: value}
//     });
// };

export const upVote = (vote) => {
    return $.ajax({
        url: 'api/votes',
        method: 'POST', 
        data: { vote: vote}
    });
};
export const getVotes = () => {
    return $.ajax({
        url: `/api/votes/`,
        method: 'GET'
    });
};

export const getVote = (id) => {
    return $.ajax({
        url: `/api/votes/${id}`,
        method: 'GET'
    });
};
