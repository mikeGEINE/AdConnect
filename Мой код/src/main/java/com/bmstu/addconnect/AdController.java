package com.bmstu.addconnect;

import com.bmstu.addconnect.Repository.AdRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

public class AdController {

    private AdRepository adRepository;
    public AdController(AdRepository adRepository){this.adRepository = adRepository;}

    @GetMapping("/Ad")
    public ResponseEntity<Ad> GetAd(@PathVariable Integer ad_id) {
        Optional<Ad> ad = adRepository.findById(ad_id);
        if (ad.isPresent()) {
            ResponseEntity<Ad> responseEntity = new ResponseEntity<>(ad.get(), HttpStatus.OK);
            return responseEntity;
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Ad")
    public ResponseEntity<Ad> addAd(@RequestParam Integer ad_id, @RequestParam String headline, @RequestParam Integer coast, @RequestParam String description, @RequestParam String contacts, @RequestParam String audience, @RequestParam String format, @RequestParam String platform){
        var ad = new Ad();
        ad.setHeadline(headline);
        ad.setCoast(coast);
        ad.setDescription(description);
        ad.setContacts(contacts);
        ad.setAudience(audience);
        ad.setFormat(format);
        ad.setPlatform(platform);

        var savedAd = adRepository.save(ad);
        ResponseEntity<Ad> responseEntity = new ResponseEntity<>(savedAd, HttpStatus.OK);
        return responseEntity;
    }
}
