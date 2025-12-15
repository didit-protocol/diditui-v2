import { toast as sonnerToast } from "sonner";
import { ToastBaseProps as ToastProps, Toast, toastVariants } from "./toast";
import { Toaster, ToasterProps } from "./toaster";

function errorToast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast variant="error" id={id} title={toast.title} description={toast.description} />
  ));
}

function warningToast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast variant="warning" id={id} title={toast.title} description={toast.description} />
  ));
}

function successToast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast variant="success" id={id} title={toast.title} description={toast.description} />
  ));
}

function infoToast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast variant="info" id={id} title={toast.title} description={toast.description} />
  ));
}

const toast = {
  info: infoToast,
  warning: warningToast,
  success: successToast,
  error: errorToast,
};

export { toast, Toaster, Toast, toastVariants };
export type { ToasterProps, ToastProps };
