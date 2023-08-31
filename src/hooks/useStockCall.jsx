import React from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { fetchStart } from "../features/stockSlice";
import { getSuccess } from "../features/stockSlice";
import { fetchFail } from "../features/stockSlice";
import useAxios from './useAxios';

const useStockCall = () => {
  const dispatch =useDispatch()
  const {token}=useSelector((state)=>state.auth)
  const {axiosWithToken}=useAxios()
  
  const getStockData = async(url)=>{
    //const BASE_URL= "https://10001.fullstack.clarusway.com/"
  
    dispatch(fetchStart())
   
    try{
    // const {data} = await axios(`${BASE_URL}stock/${url}/`,{
    //   headers: {Authorization: `Token ${token}`},
    // })
    const {data} =  await axiosWithToken.get(`stock/${url}/`)
    dispatch(getSuccess({data,url}))
  }catch(error){
    console.log(error)
    dispatch(fetchFail())
  }
    }
    const deleteStockData = async(url,id)=>{
      dispatch(fetchStart())
     try{
       await axiosWithToken.delete(`stock/${url}/${id}/`)
     getStockData(url)
    }catch(error){
      console.log(error)
      dispatch(fetchFail())
    }
      }
  return {getStockData, deleteStockData}
}

export default useStockCall


