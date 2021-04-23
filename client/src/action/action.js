import * as api from "../api/api";

export const getblogs=()=>async(dispatch)=>{
    try {
        const{data}=await api.fetchblogs();
        dispatch({type:'FETCH' ,payload:data});

    } catch (error) {
        console.log(error)
    }
};

export const createblog=(blog)=>async(dispatch)=>{
    try {
        
        const {data} =await api.makeblogs(blog);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error)
    }
};

export const updateblog=(id,upblog)=>async(dispatch)=>{
    try {
        const {data}=await api.improveblog(id,upblog);
        dispatch({type:'UPDATE',payload:data})
    } catch (error) {

        console.log(error)
    }
};

export const lblog=(id)=>async(dispatch)=>{
    try {
        const {data}= await api.likedblog(id)
        dispatch({type:'LIKE',payload:data})
    } catch (error) {
        console.log(error)
    }
};

export const dblog=(id)=>async(dispatch)=>{
    try {
        const{data}=await api.deleteblog(id)
        dispatch({type:'DELETE',payload:data})
    } catch (error) {
        console.log(error)
        
    }
}