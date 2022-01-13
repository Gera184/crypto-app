import { createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../components/notification/Notification";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment(state, action) {
      const newItem = action.payload;
      state.comments.push({
        id: newItem.id,
        title: newItem.title,
        comment: newItem.comment,
      });
    },
    deleteComment(state, action) {
      const indexPayload = action.payload;
      state.comments = state.comments.filter(
        (item, index) => index !== indexPayload
      );
    },
    editComment(state, action) {
      state.comments[action.payload.index] = action.payload;
    },
  },
});

export const commentsAction = commentsSlice.actions;

export default commentsSlice.reducer;
