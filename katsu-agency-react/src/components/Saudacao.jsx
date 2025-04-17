
import './Saudacao.css';

function Saudacao({ nome, cargo }) {
  return (
    <div className="saudacao">
      <h2>Olá, {nome}!</h2>
      <p>Cargo: {cargo}</p>
    </div>
  );
}

export default Saudacao;
