import axios from "axios";

// const url='http://localhost:5000/Blog';
// const url1='http://localhost:5000/Blog/create';
// http://localhost:5000
// https://shareyourview.herokuapp.com

const API=axios.create({baseURL:"https://shareyourview.herokuapp.com"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
// export const fetchblogs=()=>axios.get(url);
// export const makeblogs=(blogcontent)=>axios.post(url1,blogcontent);
// export const improveblog=(id,improved)=>axios.patch(`${url}/${id}`,improved);
// export const deleteblog =(id)=>axios.delete(`${url}/${id}`)
// export const likedblog=(id)=>axios.patch(`${url}/${id}/liked`)

export const fetchblogs=()=>API.get('/Blog');
export const makeblogs=(blogcontent)=>API.post('/Blog/create',blogcontent);
export const improveblog=(id,improved)=>API.patch(`/Blog/${id}`,improved);
export const deleteblog =(id)=>API.delete(`/Blog/${id}`)
export const likedblog=(id)=>API.patch(`/Blog/${id}/liked`)


export const signIn=(formdata)=>API.post("/user/signin",formdata);
export  const signUp=(formdata)=>API.post("/user/signup",formdata);