import Card from "../components/Card";

const Home = () => {
    const lessons = [
        { title: "Component de formulario", description: "Criação de um formulario com inputs de nome, data de nascimento, selecionar sexo", path: "/aula-1" },
        { title: "Aula 2", description: "Fazer uma listagem ultilizando input", path: "/aula-2" },
        { title: "Prova N1", description: "Desenvolver uma aplicação React que permita o cadastro de usuários por meio de um formulário, utilize o react-router-dom para navegação e exiba uma lista de usuários cadastrados.", path: "/prova-avliativa-n1" },
    ];

    return (
        <div style={styles.container} >
            <h1>Desenvolvimento Web</h1>
            <p>O projeto em si vai armazenar todos os conteúdos práticos feitos em sala de aula!</p>
            <div style={styles.cardContainer}>
                {lessons.map((lesson, index) => (
                    <Card key={index} title={lesson.title} description={lesson.description} path={lesson.path} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "justify",
        padding: "20px",
    },
    cardContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 colunas
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
    },

};

export default Home;
