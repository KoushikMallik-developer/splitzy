import toast from "react-hot-toast";
import { cleanErrorMessage } from "./clearErrorMessage";

export const AxiosToast = (type, data) => {
  if (type === "success") {
    toast.success(data);
  } else {
    toast.error(cleanErrorMessage(data.response.data.message));
    return {
      message: data.response.data.message || "An error occurred",
    };
  }
};
