import { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container d-flex justify-content-center align-items-start gap-3 mt-5">
      <input
        ref={inputRef}
        className="form-control w-50"
        type="text"
        placeholder="Clique no botão para focar"
      />
      <button className="btn btn-warning" onClick={focusInput}>
        Focar Input
      </button>
    </div>
  );
};

export default UseRefExample;
