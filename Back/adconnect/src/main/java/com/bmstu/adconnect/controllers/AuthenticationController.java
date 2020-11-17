package com.bmstu.adconnect.controllers;

import java.util.Optional;

import com.bmstu.adconnect.models.User;
import com.bmstu.adconnect.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public User user(@AuthenticationPrincipal OAuth2User principal) {
        Optional<User> user = userRepository.findByEmail(principal.getAttribute("email"));
        if(user.isPresent()){
            return user.get();
        } 
        else{
            User newUser = new User();
            newUser.setName(principal.getAttribute("name"));
            newUser.setEmail(principal.getAttribute("email"));
            newUser.setAvatar(principal.getAttribute("avatar_url"));
            userRepository.save(newUser);
            return newUser;
        }
    }
    
}
