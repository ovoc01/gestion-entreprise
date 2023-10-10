package com.gestion.entreprise.model.rh.besoin.qcm;

import java.sql.Connection;

import com.framework.core.datasource.annotation.Column;
import com.framework.core.datasource.annotation.Mapping;
import com.framework.core.datasource.annotation.PrimaryKey;
import com.framework.core.datasource.mapping.DtbObjectAccess;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Mapping(database = "gestion_entreprise",table = "type_question")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TypeQuestion extends DtbObjectAccess{
    @Column
    @PrimaryKey(prefix = "QTYPE", sequence = "type_question_seq")
    String idType;

    @Column
    String intitule;

    public void buildPk(Connection c) throws Exception{
        super.buildPk(c, 10);
    }
}
