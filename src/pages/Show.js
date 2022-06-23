import React,{useEffect,useReducer} from 'react'
import { useParams } from 'react-router-dom'
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import {apiGet} from '../misc/config'
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';
const initialstate={
  isLoading:true,
  error:null,
  show:null
};
const reducer=(prevstate,action)=>{
switch(action.type){
  case 'FETCH_SUCCESS':{
    return { isLoading:false,error:null,show:action.show}
  }
  case 'FETCH_FAILED':{
    return { ...prevstate, isLoading:false,error:action.error,show:action.show}
  }
default:{
  return prevstate;
}
}
}
const Show = () => {
    const {id}=useParams();
    
    let isMounted=true
   const [{isLoading,error,show},dispatch]= useReducer(reducer,initialstate)
    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
          if(isMounted){
          dispatch({type:"FETCH_SUCCESS",show:results})
          }
        }).catch(err=>{
          if(isMounted){
            dispatch({type:"FETCH_FAILED",error:error.message})
          }
        })
        return()=>{
         isMounted=false
        }
    },[id])
    console.log(show);
    if(isLoading){
      return <div>data is loading</div>
    }
    if(error){
      return <div>error occurred:{error}</div>
    }
  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show