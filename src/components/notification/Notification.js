import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notification = (status) => {
  toast.configure();
  switch (status) {
    case "empty":
      return toast.error("nothing added yet", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case "success":
      return toast.success("coin added successfully", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case "exist":
      return toast.error("coin alerady exist", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
};
