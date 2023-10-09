package com.gestion.entreprise.controller;

import java.sql.Connection;
import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.framework.core.datasource.connection.DtbConnexion;
import com.gestion.entreprise.model.rh.Service;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceController {

    @GetMapping("/services")
    public ResponseEntity<?> getService() throws SQLException {
        Connection c = null;
        try {
            c = DtbConnexion.sessionConnection("gestion_entreprise");
            Service[] services = new Service().select(c);
            
            return ResponseEntity.ok(services);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            c.close();
        }
    }

    @PutMapping("/services")
    public ResponseEntity<String> putService() {
        String message = "PUT request received";
        //TODO
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("/services")
    public ResponseEntity<String> postService() {
        String message = "POST request received";
         //TODO
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @DeleteMapping("/services")
    public ResponseEntity<String> deleteService() {
        String message = "DELETE request received";
         //TODO
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
