import React from "react";

const Modal = ({ toggleModal }) => {
  return (
    <div>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full flex justify-center max-w-lg p-5 relative shadow-lg">
          <div>
            <div className="w-full flex justify-end">
              <button
                onClick={() => toggleModal()}
                className="pb-5 font-black text-3xl text-white text-right "
              >
                X
              </button>
            </div>
            <iframe
              //   width="1200"
              //   height="600"
              src="https://media.graphcms.com/zPXFbFZHSQOmfRu6v5Xb"
              title="video player"
              frameBorder="0"
              allowFullScreen
              className="rounded-xl w-screen h-[300px] md:h-[400px] md:w-[800px] lg:h-[600px] lg:w-[1200px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
