package com.bhh.service.backservice.entity;

import com.bhh.service.backservice.enums.PagamentoStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@Table(name = "servico")
@NoArgsConstructor
@AllArgsConstructor
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeCliente;

    @Temporal(TemporalType.DATE)
    private Date dataInicio = new Date();

    @Temporal(TemporalType.DATE)
    private Date dataTermino = new Date();

    private String descricaoServico;
    private Double valorServico;
    private Double valorPago;

    @Temporal(TemporalType.DATE)
    private Date dataPagamento;

    @Enumerated(EnumType.STRING)
    private PagamentoStatus status;
}
