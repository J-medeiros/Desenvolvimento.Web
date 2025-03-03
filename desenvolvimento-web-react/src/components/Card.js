import { Link } from "react-router-dom";
import React from "react";

const Card = ({ title, description, path }) => {
    // eslint-disable-next-line no-undef
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link to={path} style={style.link}>
            <div
                style={{
                    ...style.card,
                    backgroundColor: isHovered ? "red" : "rgb(105 105 215 / 50%)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div>
                    <h3>{title}</h3>
                </div>
                <p>{description}</p>
            </div>
        </Link>
    );
};

const style = {
    card: {
        width: "400px",
        padding: "20px",
        margin: "30px",
        border: "1px solid #000",
        borderRadius: "10px",
        backgroundColor: "rgb(105 105 215 / 50%)",
        color: "#000",
        textAlin: "center",
    },
    link: {
        textDecoration: "none", // Removendo o sublinhado
        color: "inherit", // Mantendo a cor padrão do texto
    }
};

export default Card;
