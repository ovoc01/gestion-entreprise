package com.gestion.entreprise.controller;

import java.sql.Connection;

import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.framework.core.datasource.connection.DtbConnexion;
import com.gestion.entreprise.model.rh.besoin.Annonce;

import services.response.ApiResponse;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class AnnonceController {
    @GetMapping("annonces")
    public ApiResponse getAnnonces() {

        return new ApiResponse(200, "liste annonces");
    }

    @PostMapping("annonces")
    public ResponseEntity<String> addAnnonce(@ModelAttribute Annonce annonce) throws SQLException {
        annonce.objectOverview();
        Connection c = null;
        try {
            c = DtbConnexion.sessionConnection("gestion_entreprise");
            // annonce.buildPk(c);
            // annonce.insert(c);
            // c.commit();
            return new ResponseEntity<String>("Annonce crée avec success", HttpStatus.CREATED);
        } catch (Exception e) {
            c.rollback();
            e.printStackTrace();
            return new ResponseEntity<String>("Une erreur s'est produit lors du creation de l'annonce",
                    HttpStatus.CONFLICT);

        } finally {
            c.close();
        }
    }
}
