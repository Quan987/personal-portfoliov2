import { createPortal } from "react-dom";
import { STATUS_VARIANTS } from "@/pages/ContactPage/contact.constants";

export interface StatusModalProps {
  success: boolean;
  message: string;
  onClose: () => void;
}

export default function StatusModal({
  success,
  message,
  onClose,
}: StatusModalProps) {
  const statusData = {
    ...STATUS_VARIANTS[success ? "success" : "error"],
    message,
    buttonColor: success
      ? "bg-status-success hover:border-status-success hover:text-status-success"
      : "bg-status-error hover:border-status-error hover:text-status-error",
  };

  return createPortal(
    <div
      id="modal-container"
      className="size-full fixed inset-0 flex items-center justify-center z-modal bg-black/50"
    >
      <div
        id="modal"
        className="bg-white rounded-sm flex flex-col items-center justify-center h-[18rem] w-[28rem]"
      >
        <div id="modal-banner" className="h-20">
          <img
            src={statusData.illustration.image}
            alt={statusData.illustration.alt}
            className="size-full"
          />
        </div>
        <div className="flex flex-col items-center gap-2 my-5">
          <div
            id="modal-header"
            className="text-foreground-primary font-medium text-xl"
          >
            {statusData.title}
          </div>
          <div
            id="modal-container"
            className="text-foreground-muted text-sm text-center w-9/12"
          >
            {statusData.message}
          </div>
        </div>
        <div id="modal-footer" className="">
          <button
            type="button"
            onClick={onClose}
            className={`${statusData.buttonColor} text-foreground-secondary hover:bg-primary-light border-1 rounded-sm transition-colors duration-150 px-4 py-2`}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
}
