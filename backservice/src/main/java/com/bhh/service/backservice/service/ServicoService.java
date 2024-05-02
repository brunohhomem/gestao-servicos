package com.bhh.service.backservice.service;

import com.bhh.service.backservice.entity.Servico;
import com.bhh.service.backservice.enums.PagamentoStatus;
import com.bhh.service.backservice.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {

    @Autowired private ServicoRepository repository;

    public List<Servico> buscarTodos(){
        return repository.findAll();
    }

    public List<Servico> buscarPagamentoPendente(){
        return repository.buscarPagamentoPendente();
    }

    public List<Servico> buscarServicoCancelado(){
        return repository.buscarServicoCancelado();
    }

    public Servico inserir(Servico entity){
        if (entity.getValorPago() == null || entity.getValorPago() == 0 || entity.getDataPagamento()==null) {
            entity.setStatus(PagamentoStatus.PENDENTE);
        }else{
            entity.setStatus(PagamentoStatus.REALIZADO);
        }
        return repository.saveAndFlush(entity);
    }

    public Servico alterar(Servico entity){
        if (entity.getValorPago() != null && entity.getValorPago() > 0 && entity.getDataPagamento()!=null) {
            entity.setStatus(PagamentoStatus.REALIZADO);
        }
        return repository.saveAndFlush(entity);
    }

    public void excluir(Long id){
        repository.deleteById(id);
    }
}
