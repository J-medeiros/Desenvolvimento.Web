import Card from "../components/Card";

const Home = () => {
    const lessons = [
        { title: "Component de formulario", description: "Criação de um formulario com inputs de nome, data de nascimento, selecionar sexo", path: "/aula-1" },
        { title: "Aula 2", description: "JavaScript Básico", path: "/aula-2" },
        { title: "Aula 3", description: "DOM e Eventos", path: "/aula-3" },
        { title: "Aula 4", description: "React Fundamentos", path: "/aula-4" },
        { title: "Aula 5", description: "Componentes e Props", path: "/aula-5" },
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
