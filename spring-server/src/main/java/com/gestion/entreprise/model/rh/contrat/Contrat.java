package com.gestion.entreprise.model.rh.contrat;

import com.framework.core.datasource.annotation.Column;
import com.framework.core.datasource.annotation.Mapping;
import com.framework.core.datasource.annotation.PrimaryKey;
import com.framework.core.datasource.mapping.DtbObjectAccess;

import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Mapping(database = "gestion_entreprise")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contrat extends DtbObjectAccess{
    @Column
    @PrimaryKey(sequence = "contrat_seq",prefix = "CTR")
    String idContrat;
    @Column
    String intitule;
}
