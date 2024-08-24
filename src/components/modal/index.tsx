import React from "react";
import classNames from "classnames";

function Modal({
  title,
  children,
  isOpen,
  onClose,
  size = "medium",
}: ModalProps) {
  return (
    <div>
      {isOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className={classNames("bg-white rounded-sm pb-5", {
              "w-96": size === "small",
              "w-1/2": size === "medium",
              "w-3/4": size === "large",
              "w-full": size === "full",
            })}
          >
            <div className="flex justify-between px-3">
              <h1 className="font-bold">{title}</h1>
              <h1
                className="cursor-pointer"
                onClick={() => {
                  onClose();
                }}
              >
                X
              </h1>
            </div>

            <div className="px-3">
              <hr />
            </div>

            <div className="px-3">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "small" | "medium" | "large" | "full";
}
