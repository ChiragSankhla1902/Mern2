const blogsr=(blogs=[],action)=>{
    switch (action.type) {
        case 'FETCH':
            return (action.payload);
        case'CREATE':
            console.log(action.payload);
            return[...blogs,action.payload];
        case 'UPDATE':
            return  blogs.map((x) => (x._id === action.payload._id ? action.payload : x));
        case 'LIKE':
            return blogs.map((x) => (x._id === action.payload._id ? action.payload : x));
        case 'DELETE':
            return blogs.filter((x) => x._id !== action.payload);
        default:
            return blogs;
    }
};


export default blogsr;