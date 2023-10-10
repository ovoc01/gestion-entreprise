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
import com.gestion.entreprise.model.rh.besoin.qcm.TypeQuestion;

@RestController
@RequestMapping("api/qcm")
@CrossOrigin(origins = "*")
public class QCMController {
    @GetMapping("type_questions")
    public ResponseEntity<?> getTypeQuestion() throws SQLException{
        Connection c = null;
        try {
            c = DtbConnexion.sessionConnection("gestion_entreprise");
            TypeQuestion[] typeQuestions = new TypeQuestion().select(c);
            return ResponseEntity.ok(typeQuestions);
        } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }finally{
            c.close();
        }
    }
}
