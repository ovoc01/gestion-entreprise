package com.gestion.entreprise.model.rh.besoin;

import java.sql.Timestamp;
import java.sql.Connection;

import com.framework.core.datasource.annotation.Column;
import com.framework.core.datasource.annotation.Mapping;
import com.framework.core.datasource.annotation.PrimaryKey;
import com.framework.core.datasource.mapping.DtbObjectAccess;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Mapping(database = "gestion_entreprise")
@NoArgsConstructor
public class Annonce extends DtbObjectAccess {
    @Column
    @PrimaryKey(prefix = "ANNONCE", sequence = "annonce_seq")
    String idAnnonce;

    @Column
    String idContrat;

    @Column
    String idService;
    
    @Column
    String intitule;
    
    @Column(isNumber = true)
    Double tjm;
    
    @Column
    String dateCreation;
    
    @Column
    Timestamp dateLimiteDepot;

    
    String deadline;
    
    @Column(isNumber = true)
    Integer status;

    public void buildPk(Connection c) throws Exception {
        super.buildPk(c, 14);

    }
}
