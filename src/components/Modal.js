import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ opne, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialog} open={opne}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;