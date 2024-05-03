import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Cadastro de Serviços</h1>
      <form>
        <div className="col-6">
          <div>
            <label className="form-label">Nome do Cliente</label>
            <input type="text" className="form-control"></input>
          </div>
          <div>
            <label className="form-label">Data de Início</label>
            <input type="date" className="form-control"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
