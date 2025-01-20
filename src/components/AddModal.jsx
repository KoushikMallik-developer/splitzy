import React, { useEffect } from "react";
import { TbXboxX, TbInfoCircle } from "react-icons/tb";

const Modal = ({ isOpen, onClose, title, children, maxWidth = "md" }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") handleTabKey(e);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
    >
      {/* Backdrop with animation */}
      <div
        className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isOpen ? 0.5 : 0,
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container with animation */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-in-out w-full ${maxWidthClasses[maxWidth]} mx-auto`}
          style={{
            transform: isOpen
              ? "scale(1) translateY(0)"
              : "scale(0.95) translateY(-20px)",
            opacity: isOpen ? 1 : 0,
          }}
        >
          {/* Modal Content */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center p-3 sm:p-4">
              <h2
                id="modal-title"
                className="text-lg sm:text-xl font-bold text-black"
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-black transition-colors p-2 rounded-lg"
                aria-label="Close modal"
              >
                <TbXboxX className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-2 sm:p-4" role="document">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your invitation logic here
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Friend"
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter email addresses..."
            className="w-full px-3 sm:px-4 py-3 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm sm:text-base border border-gray-600 text-gray-700 rounded-lg transition-colors order-2 sm:order-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors order-1 sm:order-2 sm:flex-1"
          >
            Search
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddModal;
