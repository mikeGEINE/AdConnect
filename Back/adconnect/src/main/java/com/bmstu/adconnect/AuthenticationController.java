package com.bmstu.adconnect;

import java.util.Map;
import java.util.HashMap;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        Map<String, Object> fields = new HashMap<>();
        fields.put("name", principal.getAttribute("name"));
        fields.put("login", principal.getAttribute("login"));
        fields.put("email", principal.getAttribute("email"));
        return fields;
    }
    
}
