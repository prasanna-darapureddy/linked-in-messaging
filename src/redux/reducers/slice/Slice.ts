import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import usersData from '../../../Data'

export interface linkedInState {
    formData:{
        countryCode:string, name:string, email:string, mobile:string, password:string, role:string,
    },
    usersData: {
        userId: number;
        firstName: string;
        lastName: string;
        designation: string;
        location: string;
        connections: number;
        profilePicture: string;
        contactInfo: {
          yourProfile: string;
          email: string;
          phoneNumber: string;
        };
        posts: [
          {
            postId: number;
            content: string;
            attachment: string;
          }
        ];
        messages: [
          {
            to: string;
            from: string;
          }
        ];
        isFavorite: boolean,
      }[];
    selectedChattingUser : {
        userId: number;
        firstName: string;
        lastName: string;
        designation: string;
        location: string;
        connections: number;
        profilePicture: string;
        contactInfo: {
          yourProfile: string;
          email: string;
          phoneNumber: string;
        };
        posts: [
          {
            postId: number;
            content: string;
            attachment: string;
          }
        ];
        messages: [
          {
            to: string;
            from: string;
          }
        ];
        isFavorite: boolean,
    },

}

const initialState: linkedInState = {
    formData:{
        countryCode:'', name:'', email:'', mobile:'', password:'', role:'',
    },
    usersData: usersData,
    selectedChattingUser: usersData[1],

}

export const registerNewUser = createAsyncThunk('linkedInUser/registerNewUser', async () => {
    const url = 'https://122.175.39.120:9096/property-api/users'
    const options = {        
        headers: {'Content-Type': 'multipart/form-data' },
        body: initialState.formData,
    }    
    await axios.post(url, options)
    .then(response => {console.log(response, 'success')})
    .catch(error => {console.log(error, 'success')})    
})

export const linkedInSlice = createSlice({
    name: 'linkedIn',
    initialState,
    reducers: {
        postUserDetails:(state, action) => {
            state.formData = action.payload                               
        },
        isFavoriteChatUser:(state, action) => {
            const updateFavUsers = state.usersData.map(eachUser => {
                if(eachUser.userId === action.payload){
                    const updateIsFavorite = {...eachUser, isFavorite: !eachUser.isFavorite}
                    state.selectedChattingUser = updateIsFavorite
                    return updateIsFavorite
                }else{
                    return eachUser
                }
            })
            updateFavUsers && (state.usersData = updateFavUsers)            
        },
        getSelectedChattingUser:(state, action) => {
            const selectedUser = state.usersData.find(eachUser => eachUser.userId === action.payload)
            selectedUser && (state.selectedChattingUser = selectedUser)           
        },
        getSearchedChatUsers:(state, action) => {
            const searchedUsers = state.usersData.filter(eachUser => {
                return eachUser.firstName.toLowerCase().includes(action.payload.toLowerCase())
            })
            state.usersData = searchedUsers
        },
    },
    extraReducers(builder) {
        builder        
          .addCase(registerNewUser.fulfilled, (state, action) => {
            console.log('success', action.payload)           
          })
          .addCase(registerNewUser.rejected, (state, action) => {
            console.log('failed', action.payload)           
          })
      }
})
export const {postUserDetails, getSelectedChattingUser, isFavoriteChatUser, getSearchedChatUsers} = linkedInSlice.actions
export default linkedInSlice.reducer