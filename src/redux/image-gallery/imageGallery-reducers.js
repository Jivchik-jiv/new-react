import { createReducer, createSlice } from "@reduxjs/toolkit";
import { fetchImagesSuccess } from "./imageGallery-actions";

// export const imageGalleryReducer = createReducer([],{
//     [fetchImagesSuccess]: (state, action)=>{
//         if(action.payload.page===1){

//             return [...action.payload.images]
//         }
//         return [...state, ...action.payload.images]
//     },
//     'image-gallery/get/fulfilled': (state, action)=>{
//         if(action.payload.page===1){

//             return [...action.payload.images]
//         }
//         return [...state, ...action.payload.images]
//     },
//     'image-gallery/get/pending': (state, action)=>{
//         debugger;
//     },
// }) ;

const imageGallerySlice = createSlice({
  name: "imageGallery",
  initialState: [],
  reducers: {
    fetchImages: (state, action) => {
      if (action.payload.page === 1) {
        return [...action.payload.images];
      } else {
        state.push(...action.payload.images);
      }
    },
  },
});

export const { fetchImages } = imageGallerySlice.actions;
export const imageGalleryReducer = imageGallerySlice.reducer;
