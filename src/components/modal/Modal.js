import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteCoinAction,
  initializeSelectedCoinAction,
} from "../../redux/actions/coinActions";
import { AddCommentAction } from "../../redux/actions/commentAction";
import "./Modal.css";
import CommentTable from "./CommentTable";

const Modal = () => {
  const [toogleForm, setToogleForm] = useState({
    updateBtn: false,
    backBtn: false,
    commentBtn: false,
  });
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const selectedCoin = useSelector(
    (selectedCoin) => selectedCoin.coins.selectedCoin
  );
  const dispatch = useDispatch();

  const deleteCoinHandler = () => {
    dispatch(DeleteCoinAction(selectedCoin.id));
    dispatch(initializeSelectedCoinAction);
  };

  const toggleHandler = (state) => {
    switch (state) {
      case "back":
        return setToogleForm((prevState) => ({
          ...prevState,
          updateBtn: false,
        }));
      case "comment":
        return setToogleForm((prevState) => ({
          ...prevState,
          commentBtn: !toogleForm.commentBtn,
        }));
    }
  };

  const hundeleOnSubmitHandler = () => {
    if (!title || !comment) {
      alert("Please add title and comment");
      return;
    }

    dispatch(
      AddCommentAction({
        id: selectedCoin.id,
        title: title,
        comment: comment,
      })
    );
    setTitle("");
    setComment("");
  };

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        {selectedCoin.image ? (
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {selectedCoin.name} ({selectedCoin.symbol})
              </h5>

              <img
                src={selectedCoin.image.thumb}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">
              <CommentTable
                selectedCoinId={selectedCoin.id}
                setToogleForm={setToogleForm}
                title={title}
                comment={comment}
              />
              {toogleForm.commentBtn && (
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={title}
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      comment
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      value={comment}
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </div>
                </form>
              )}
            </div>
            <div class="modal-footer">
              <button
                onClick={deleteCoinHandler}
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-secondary"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  toggleHandler("comment");
                }}
              >
                Comment
              </button>

              <button
                type="button"
                class="btn btn-secondary"
                onClick={hundeleOnSubmitHandler}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="none-favorites text-center">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
