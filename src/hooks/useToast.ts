import { Id, toast } from "react-toastify";

import colors from "assets/colors";

type ToastOptions = {
  message: string;
  type: "error" | "success";
};

type UseToastReturn = {
  showToast: (ToastOptions) => Id;
};

export const useToast = (): UseToastReturn => {
  const showToast = ({ message, type }: ToastOptions): Id =>
    toast(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      style: { backgroundColor: colors[type], color: "white" },
    });

  return { showToast };
};
