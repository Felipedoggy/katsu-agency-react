
import './App.css';
import Cabecalho from './components/Cabecalho';
import Saudacao from './components/Saudacao';
import Lista from './components/Lista';
import Rodape from './components/Rodape';

function App() {
  const tarefas = ['Estudar React', 'Praticar JavaScript', 'Criar um projeto'];

  return (
    <div className="app-container">
      <Cabecalho />
      <main>
        <Saudacao nome="Estudante" cargo="Desenvolvedor(a) Iniciante" />
        <Lista itens={tarefas} />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
