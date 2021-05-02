const { default: FormattedTime } = require("./formattedTime");

const Modal = ({ isModalOpen, setModalOpen, lastTime }) => {
  if (isModalOpen) {
    return (
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30 z-10 flex justify-center items-center">
        <div className="bg-white w-96 h-72 rounded border border-black opacity-100 flex flex-col">
            <span onClick={()=>{setModalOpen(false)}}>X</span>
          <h2>You Last time was:</h2>
          <div>
            <FormattedTime time={lastTime} />
          </div>

          <h3>Do you wanna save your result</h3>
          <div className="inline-flex">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Modal;
