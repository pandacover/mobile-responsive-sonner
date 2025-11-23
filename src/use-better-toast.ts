import { type ExternalToast, toast as sonnerToast } from "sonner";
import { useIsMobile } from "./use-mobile";

type titleT = (() => React.ReactNode) | React.ReactNode;

type ToastType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "custom"
  | "message"
  | "dismiss"
  | "loading";

type Toast = {
  [K in ToastType]: (
    message: titleT | React.ReactNode,
    data?: ExternalToast
  ) => string | number;
};

export const useToast = () => {
  const isMobile = useIsMobile();
  const getPosition = (position: ExternalToast["position"]) => {
    if (position) return position;

    if (isMobile) return "top-center";

    return "bottom-right";
  };

  const baseToast = (message: titleT | React.ReactNode, data?: ExternalToast) =>
    sonnerToast(message, {
      ...(data ?? {}),
      position: getPosition(data?.position),
    });

  const toast = Object.assign(
    baseToast,
    Object.keys(sonnerToast).reduce((acc, key: string) => {
      const k = key as ToastType;

      acc[k] = ((message: titleT | React.ReactNode, data?: ExternalToast) => {
        const fn = sonnerToast[k] as Toast[ToastType];

        fn(message, {
          ...(data ?? {}),
          position: getPosition(data?.position),
        });
      }) as Toast[ToastType];

      return acc;
    }, {} as Record<ToastType, Toast[ToastType]>)
  );

  return toast;
};
