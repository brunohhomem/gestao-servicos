package com.bhh.service.backservice.repository;

import com.bhh.service.backservice.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServicoRepository extends JpaRepository<Servico, Long> {

    @Query("SELECT s FROM Servico s where s.valorPago is null OR s.valorPago = 0")
    List<Servico> buscarPagamentoPendente();

    @Query("SELECT s FROM Servico s where s.status = 'CANCELADO'")
    List<Servico> buscarServicoCancelado();

}
