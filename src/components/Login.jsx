import { useState } from "react";

export const Login = () => {
  // armazenando as informações no state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   funcionalidade button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    alert("Ok, você entrou no sistema");

    // limpando formulario
    setUsername("");
    setPassword("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        {/* email do usuario */}
        <div className="input-field">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        {/* senha do usuario */}
        <div className="input-field">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {/* lembre de mim */}
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          {/* esqueceu a senha */}
          <a href="#">Esqueceu a senha</a>
        </div>
        {/* button entrar */}
        <button>Entrar</button>
        {/* registre */}
        <div className="signup">
          <p>
            Não tem uma conta? <a href="#">Registre</a>
          </p>
        </div>
      </form>
    </div>
  );
};
