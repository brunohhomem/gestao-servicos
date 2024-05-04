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
    @CrossOrigin("http://localhost:3000")
    public List<Servico> buscarTodos(){
        return service.buscarTodos();
    }

    @GetMapping("/pendentes")
    @CrossOrigin("http://localhost:3000")
    public List<Servico> buscarPagamentoPendente(){
        return service.buscarPagamentoPendente();
    }

    @GetMapping("/cancelados")
    @CrossOrigin("http://localhost:3000")
    public List<Servico> buscarServicoCancelado(){
        return service.buscarServicoCancelado();
    }

    @PostMapping
    @CrossOrigin("http://localhost:3000")
    public Servico inserir(@RequestBody Servico servico){
        return service.inserir(servico);
    }

    @PutMapping
    @CrossOrigin("http://localhost:3000")
    public Servico alterar(@RequestBody Servico servico){
        return service.alterar(servico);
    }

    @PostMapping("/{id}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Void> cancelar(@PathVariable Long id){
        service.cancelarServico(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Void> remover(@PathVariable Long id){
        service.excluir(id);
        return ResponseEntity.ok().build();
    }

}
