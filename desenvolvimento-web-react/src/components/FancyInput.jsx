import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = "";
        },
    }));

    return <input ref={inputRef} placeholder="Digite algo..." />;
});

export default FancyInput;
