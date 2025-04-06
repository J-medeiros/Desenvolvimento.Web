import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const boxWidth = boxRef.current.getBoundingClientRect().width;
      setWidth(boxWidth);
    }
  }, []);

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <div
        ref={boxRef}
        className="bg-info text-white p-4 rounded"
        style={{ width: "300px", textAlign: "center" }}
      >
        Componente Azul
      </div>
      <p className="mt-3">Largura do componente: <strong>{width}px</strong></p>
    </div>
  );
};

export default UseLayoutEffectExample;
