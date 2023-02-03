import { toast } from "react-toastify";

import colors from "../assets/colors";

type ToastOptions = {
  message: string;
  type: "error" | "success";
};

export const useToast = ({ message, type }: ToastOptions) =>
  toast(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    style: { backgroundColor: colors[type], color: "white" },
  });
