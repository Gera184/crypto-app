import { commentsAction } from "../reducers/commentsReducer";
import { Notification } from "../../components/notification/Notification";

export const AddCommentAction = (comment) => {
  return (dispatch) => {
    dispatch(commentsAction.addComment(comment));
  };
};

export const DeleteCommentAction = (index) => {
  return (dispatch) => {
    dispatch(commentsAction.deleteComment(index));
  };
};

export const EditCommentAction = (comment) => {
  return (dispatch) => {
    dispatch(commentsAction.editComment(comment));
  };
};
