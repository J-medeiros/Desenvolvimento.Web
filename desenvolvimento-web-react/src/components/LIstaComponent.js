import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ListaComponent = () => {
    const [lista, setLista] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [novoItem, setNovoItem] = useState({ nome: "", telefone: "" });

    const handleChange = (e) => {
        setNovoItem({ ...novoItem, [e.target.name]: e.target.value });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        if (novoItem.nome && novoItem.telefone) {
            setLista([...lista, novoItem]);
            setNovoItem({ nome: "", telefone: "" });
        } else {
            alert("Preencha todos os campos!");
        }
    };

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const listaFiltrada = lista.filter(
        (item) =>
            item.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            item.telefone.includes(filtro)
    );

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm">
                <h2 className="mb-4">Lista de Contatos</h2>

                {/* Campo de Filtro */}
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Filtrar por nome ou telefone..."
                    value={filtro}
                    onChange={handleFiltroChange}
                />

                {/* Formulário para Adicionar Contato */}
                <form onSubmit={handleAddItem} className="mb-3">
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            name="nome"
                            placeholder="Nome Completo"
                            value={novoItem.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="tel"
                            className="form-control"
                            name="telefone"
                            placeholder="Telefone"
                            value={novoItem.telefone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Adicionar Contato
                    </button>
                </form>

                {/* Lista de Contatos */}
                <ul className="list-group">
                    {listaFiltrada.length > 0 ? (
                        listaFiltrada.map((item, index) => (
                            <li key={index} className="list-group-item">
                                <strong>{item.nome}</strong> - {item.telefone}
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-muted text-center">
                            Nenhum contato encontrado
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListaComponent;
