
// export const anotherName = () =>{
    
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(res2 => {
//             dispatch({
//                 type: 'CHANGE_NAME',
//                 payload: res2[0].name
//             })
//         })
//     }
// }

//use async & await

export const anotherName = () => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const res2 = await data.json();
        dispatch({
            type: 'CHANGE_NAME',
            payload: res2[0].name
        })
    }
}

export const addWish = () => {
    return {
            type: 'ADD_WISH',
            payload: 'code'
    }
}