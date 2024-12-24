import { useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ opne, children }) {
  const dialog = useRef();

  return createPortal(
    <dialog className="modal" ref={dialog} open={opne}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
