import { createSlice } from "@reduxjs/toolkit";

export const userSlice =  createSlice({
    name: "user",
    initialState:{
        userDetail: []
    },
    reducers: {
     userDetail : (state , action) =>{
         state.userDetail= action.payload.userDetail
     }
    }    
})
export const{ userDetail } = userSlice.actions;

export const userDetailData = (state) => state.user.userDetail;
export default userSlice.reducer;