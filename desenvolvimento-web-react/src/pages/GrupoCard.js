import { Link } from "react-router-dom";

const GroupCard = ({ title, description, lessons }) => {
    const styles = {
        card: {
            width: "auto",
            border: "2px solid #000",
            borderRadius: "16px",
            padding: "30px",
            backgroundColor: "#FAFBFF",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        },
        title: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#FFCB00",
            marginBottom: "10px",
        },
        description: {
            fontSize: "16px",
            marginBottom: "20px",
            color: "#000",
        },
        list: {
            listStyle: "none",
            padding: 0,
        },
        listItem: {
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: "1px solid #ccc",
        },
        link: {
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
        }
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
            <ul style={styles.list}>
                {lessons.map((lesson, index) => (
                    <li key={index} style={styles.listItem}>
                        <Link to={lesson.path} style={styles.link}>
                            {lesson.title} - {lesson.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupCard;
