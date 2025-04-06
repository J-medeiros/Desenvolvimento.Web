import GroupCard from "./GrupoCard";

const HookCard = () => {
    const lessonsPage = [
        {
            title: "useRef",
            description: "Exemplo de uso do useRef para focar um input.",
            path: "/useRefExample"
        },
        {
            title: "useReducer",
            description: "Exemplo de contador usando useReducer.",
            path: "/useReducerExample"
        },
        {
            title: "useLayoutEffect",
            description: "Exemplo de alteração de layout antes da renderização.",
            path: "/useLayoutEffectExample"
        },
        {
            title: "useImperativeHandle",
            description: "Exemplo com forwardRef e useImperativeHandle.",
            path: "/useImperativeHandleExample"
        }
    ];

    return (
        <div className="container d-flex justify-content-center gap-3 mt-5 flex-wrap">
            <GroupCard
                title="Hooks React"
                description="Exemplos de hooks avançados com componentes separados."
                lessons={lessonsPage}
            />
        </div>
    );
};

export default HookCard;
