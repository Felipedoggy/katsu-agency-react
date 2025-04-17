
import './Lista.css';

function Lista({ itens }) {
  return (
    <div className="lista">
      <h3>Lista de Tarefas:</h3>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
