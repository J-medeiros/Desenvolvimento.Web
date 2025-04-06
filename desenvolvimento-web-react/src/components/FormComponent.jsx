import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        sexo: "",
        dataNascimento: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        alert("Formulário enviado com sucesso!");
    };

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm">
                <h2 className="mb-4">Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Sobrenome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Telefone</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Sexo</label>
                        <select
                            className="form-select"
                            name="sexo"
                            value={formData.sexo}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Data de Nascimento</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;
