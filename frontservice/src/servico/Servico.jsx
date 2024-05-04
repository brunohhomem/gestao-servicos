import React, { useEffect, useState } from 'react'
import './Servico.css'
import axios from 'axios'

function Servico() {
  const [servico, setServico] = useState({
    nomeCliente: '',
    dataInicio: '',
    dataTermino: '',
    descricaoServico: '',
    valorServico: '',
    valorPago: '',
    dataPagamento: ''
  })
  const [servicos, setServicos] = useState([])
  const [atualizar, setAtualizar] = useState([])

  useEffect(() => {
    buscarTodos()
  }, [atualizar])

  function handleChange(event) {
    setServico({ ...servico, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (servico.id === undefined) {
      axios.post('http://localhost:8080/servicos', servico).then(result => {
        setAtualizar(result)
      })
    } else {
      axios.put('http://localhost:8080/servicos', servico).then(result => {
        setAtualizar(result)
      })
    }
    limpar()
  }

  function excluir(id) {
    axios.delete('http://localhost:8080/servicos/' + id).then(result => {
      setAtualizar(result)
    })
  }

  function cancelar(id) {
    axios.post('http://localhost:8080/servicos/' + id).then(result => {
      setAtualizar(result)
    })
  }

  function buscarTodos() {
    axios.get('http://localhost:8080/servicos').then(result => {
      setServicos(result.data)
    })
  }

  function buscarPagamentoPendente() {
    axios.get('http://localhost:8080/servicos/pendentes').then(result => {
      setServicos(result.data)
    })
  }

  function buscarCancelados() {
    axios.get('http://localhost:8080/servicos/cancelados').then(result => {
      setServicos(result.data)
    })
  }

  function limpar() {
    setServico({
      nomeCliente: '',
      dataInicio: '',
      dataTermino: '',
      descricaoServico: '',
      valorServico: '',
      valorPago: '',
      dataPagamento: ''
    })
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
              value={servico.dataInicio || ''}
              name="dataInicio"
              type="date"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Data de Término</label>
            <input
              value={servico.dataTermino || ''}
              name="dataTermino"
              type="date"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Descrição do Serviço</label>
            <input
              value={servico.descricaoServico || ''}
              name="descricaoServico"
              type="text"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Valor do Serviço</label>
            <input
              value={servico.valorServico || ''}
              name="valorServico"
              type="number"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Valor Pago</label>
            <input
              value={servico.valorPago || ''}
              name="valorPago"
              type="number"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label">Data de Pagamento</label>
            <input
              value={servico.dataPagamento || ''}
              name="dataPagamento"
              type="date"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          <input
            type="submit"
            value="Cadastrar"
            className="btn btn-success"
          ></input>
        </div>
      </form>

      <hr />

      <button onClick={buscarTodos} type="button" className="btn btn-primary">
        Listar Todos
      </button>
      <button
        onClick={buscarPagamentoPendente}
        type="button"
        className="btn btn-secondary"
      >
        Pagamento Pendente
      </button>
      <button
        onClick={buscarCancelados}
        type="button"
        className="btn btn-success"
      >
        Serviços Cancelados
      </button>
      <hr />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Status</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(serv => (
            <tr key={serv.id}>
              <td>{serv.nomeCliente}</td>
              <td>{serv.descricaoServico}</td>
              <td>{serv.valorServico}</td>
              <td>{serv.status}</td>
              <td>
                {serv.status != 'CANCELADO' && (
                  <button
                    onClick={() => setServico(serv)}
                    className="btn btn-primary"
                  >
                    Alterar
                  </button>
                )}
                &nbsp;&nbsp;
                {serv.status != 'CANCELADO' && (
                  <button
                    onClick={() => excluir(serv.id)}
                    className="btn btn-danger"
                  >
                    Excluir
                  </button>
                )}
                &nbsp;&nbsp;
                <button
                  onClick={() => cancelar(serv.id)}
                  className="btn btn-warning"
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Servico
