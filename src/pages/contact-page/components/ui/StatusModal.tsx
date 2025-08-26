import { STATUS } from "@/pages/contact-page/constants/status.constants";
import { getElement } from "@/utils/dom-utils";
import { createPortal } from "react-dom";

type StatusModalProps = {
  success: boolean;
  message: string;
  onClose: () => void;
  onSuccessClose?: () => void;
};

export default function StatusModal({
  success,
  message,
  onClose,
  onSuccessClose,
}: StatusModalProps) {
  const statusData = {
    ...STATUS[success ? "success" : "error"],
    message,
    buttonColor: success ? "status-success" : "status-error",
  };

  function handleClose() {
    if (success && onSuccessClose) {
      onSuccessClose(); // reset only on success
    }
    onClose(); // always close modal
  }

  return createPortal(
    <div
      id="modal-container"
      className="size-full fixed inset-0 flex-center z-modal bg-dark/50"
    >
      <div
        id="modal"
        className="bg-light text-center rounded-xl flex-col-center w-[18rem] md:w-[24rem] 2xl:w-[26rem] 3xl:w-[27rem] 4xl:w-[36rem] px-[clamp(2rem,3.25vw,3.75rem)] py-[clamp(1.25rem,3vw,2.5rem)] gap-[clamp(0.55rem,1vw,1rem)]"
      >
        <figure id="modal-banner" className="h-[clamp(3.5rem,5vw,7rem)]">
          <img
            src={statusData.illustration.image}
            alt={statusData.illustration.alt}
            className="size-full"
          />
        </figure>

        <div
          id="modal-header"
          className="text-primary font-medium text-base md:text-lg 4xl:text-2xl"
        >
          {statusData.title}
        </div>
        <div
          id="modal-body"
          className="text-muted-text whitespace-normal break-all text-[0.65rem] md:text-sm 4xl:text-lg"
        >
          {statusData.message}
        </div>

        <div id="modal-footer" className="">
          <button
            type="button"
            onClick={handleClose}
            className={`${statusData.buttonColor} text-secondary hover:bg-light active:bg-light border-1 rounded-full interactive-transition text-sm md:text-base 3xl:text-lg 4xl:text-xl px-[clamp(1.125rem,1.5vw,2rem)] py-[clamp(0.375rem,0.45vw,0.75rem)]`}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    getElement("modal")
  );
}
