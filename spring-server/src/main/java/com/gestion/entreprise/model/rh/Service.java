package com.gestion.entreprise.model.rh;


import com.framework.core.datasource.annotation.Column;
import com.framework.core.datasource.annotation.Mapping;
import com.framework.core.datasource.annotation.PrimaryKey;
import com.framework.core.datasource.mapping.DtbObjectAccess;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Mapping(database = "gestion_entreprise",table = "services")
public class Service extends DtbObjectAccess {
    @Column
    @PrimaryKey(prefix = "SVRC",sequence = "service_seq")
    String idService;
    @Column
    String intitule;
}
