import GroupCard from "../pages/GrupoCard";

const Home = () => {
    const lessonsN1 = [
        { title: "Component de formulario", description: "Criação de um formulario com inputs de nome, data de nascimento, selecionar sexo", path: "/aula-1" },
        { title: "Lista", description: "Fazer uma listagem ultilizando input", path: "/aula-2" },
        { title: "Component sem estato", description: "Criar contador sem useState", path: "/contador-com-estado" },
        { title: "Component com estato", description: "Criar contador com useState", path: "/contador-sem-estado" },
    ];

    const lessonsN2 = [
        {
            title: "05/02", description: "Faça um componente como o contador utilizado em sala de aula  useReef " +
                "useReducer, useLayoutEffect, useImperativeHandle", path: "/Hooks"
        }
    ];

    return (
        <div style={styles.container}>
            <h1>Desenvolvimento Web</h1>
            <p>O projeto em si vai armazenar todos os conteúdos práticos feitos em sala de aula!</p>

            <div style={styles.cardRow}>
                <div style={styles.cardWrapper}>
                    <GroupCard
                        title="Exercícios N1"
                        description="Essas são as atividades desenvolvidas nas aulas práticas:"
                        lessons={lessonsN1}
                    />
                </div>
                <div style={styles.cardWrapper}>
                    <GroupCard
                        title="Exercícios N2"
                        description="Exercícios da segunda nota"
                        lessons={lessonsN2}
                    />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
    },
    cardRow: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "row",
        width: "100%",
    },
    cardWrapper: {
        width: "100%",
        boxSizing: "border-box",
    },
};

export default Home;
