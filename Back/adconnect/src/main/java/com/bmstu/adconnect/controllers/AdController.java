package com.bmstu.adconnect.controllers;

import com.bmstu.adconnect.repositories.AdRepository;
import com.bmstu.adconnect.models.Ad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AdController {
    @Autowired
    private AdRepository adRepository;

    @GetMapping("/Ad/{adId}")
    public ResponseEntity<Ad> getAd(@PathVariable Integer adId) {
        Optional<Ad> ad = adRepository.findById(adId);
        if (ad.isPresent()) {
            return new ResponseEntity<>(ad.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Ad")
    public ResponseEntity<Ad> addAd(@RequestParam Integer adId, @RequestParam String headline, @RequestParam Integer coast, @RequestParam String description, @RequestParam String contacts, @RequestParam String audience, @RequestParam String format, @RequestParam String platform){
        var ad = new Ad();
        ad.setHeadline(headline);
        ad.setCoast(coast);
        ad.setDescription(description);
        ad.setContacts(contacts);
        ad.setAudience(audience);
        ad.setFormat(format);
        ad.setPlatform(platform);

        var savedAd = adRepository.save(ad);
        return new ResponseEntity<>(savedAd, HttpStatus.OK);
    }
}
