import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <input
      ref={inputRef}
      className="form-control"
      type="text"
      placeholder="Clique no botão para focar"
    />
  );
});

const UseImperativeHandleExample = () => {
  const inputComponentRef = useRef(null);

  const handleFocus = () => {
    inputComponentRef.current.focusInput();
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center gap-3">
      <CustomInput ref={inputComponentRef} />
      <button className="btn btn-primary mt-3" onClick={handleFocus}>
        Focar input do componente filho
      </button>
    </div>
  );
};

export default UseImperativeHandleExample;
