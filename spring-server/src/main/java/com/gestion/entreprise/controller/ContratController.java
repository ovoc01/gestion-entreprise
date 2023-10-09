package com.gestion.entreprise.controller;

import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.framework.core.datasource.connection.DtbConnexion;
import com.gestion.entreprise.model.rh.contrat.Contrat;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:3000")
public class ContratController {
    @GetMapping("/contrats")
    public ResponseEntity<?> getContrats() throws SQLException {
        Connection c = null;
        try {
            c = DtbConnexion.sessionConnection("gestion_entreprise");
            Contrat[] contrats = new Contrat().select(c);
            return ResponseEntity.ok(contrats);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        } finally {
            c.close();
        }
    }

}
