import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteCommentAction,
  EditCommentAction,
  RefreshCommentAction,
} from "../../redux/actions/commentAction";

const CommentTable = (props) => {
  const comments = useSelector((comment) => comment.comments.comments);
  const dispatch = useDispatch();

  const DeleteCommentHandler = (index) => {
    dispatch(DeleteCommentAction(index));
  };

  return (
    <div className="table-responsive">
      <table class="table table-hover table-striped ">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Comment</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => {
            const id = comment.id;

            if (id === props.selectedCoinId) {
              return (
                <tr key={index}>
                  <td>{comment.title}</td>
                  <td>{comment.comment}</td>
                  <td>
                    <button
                      onClick={() => {
                        DeleteCommentHandler(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommentTable;
