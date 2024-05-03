import React, {useEffect, useState} from 'react'
import './Servico.css'

function Servico() {

  const [servico, setServico] = useState({nomeCliente:'', dataInicio: '', dataTermino: '', descricaoServico:'', valorPago:'', dataPagamento:'' })
  const [servicos, setServicos] = useState([])

  function handleChange(event){
    setServico({...servico,[event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Cadastro de Serviços</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <div>
            <label className="form-label">Nome do Cliente</label>
            <input
              value={servico.nomeCliente}
              name="nomeCliente"
              type="text"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Data de Início</label>
            <input
              value={servico.dataInicio}
              name="dataInicio"
              type="date"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Data de Término</label>
            <input
              value={servico.dataTermino}
              name="dataTermino"
              type="date"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Descrição do Serviço</label>
            <input
              value={servico.descricaoServico}
              name="descricaoServico"
              type="text"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Valor Pago</label>
            <input
              value={servico.valorPago}
              name="valorPago"
              type="number"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Data de Pagamento</label>
            <input
              value={servico.dataPagamento}
              name="dataPagamento"
              type="date"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          <input type='submit' value="Cadastrar" className='btn btn-success'></input>
        </div>
      </form>
    </div>
  )
}

export default Servico
