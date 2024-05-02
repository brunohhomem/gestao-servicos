package com.bhh.service.backservice.controller;

import com.bhh.service.backservice.entity.Servico;
import com.bhh.service.backservice.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servicos")
public class ServicoController {

    @Autowired private ServicoService service;

    @GetMapping
    public List<Servico> buscarTodos(){
        return service.buscarTodos();
    }

    @GetMapping("/pendentes")
    public List<Servico> buscarPagamentoPendente(){
        return service.buscarPagamentoPendente();
    }

    @GetMapping("/cancelados")
    public List<Servico> buscarServicoCancelado(){
        return service.buscarServicoCancelado();
    }

    @PostMapping
    public Servico inserir(@RequestBody Servico servico){
        return service.inserir(servico);
    }

    @PutMapping
    public Servico alterar(@RequestBody Servico servico){
        return service.alterar(servico);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id){
        service.excluir(id);
        return ResponseEntity.ok().build();
    }

}
