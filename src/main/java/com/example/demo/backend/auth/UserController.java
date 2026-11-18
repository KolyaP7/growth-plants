package com.example.demo.backend.auth;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }
    
    @PostMapping("/register")
    public Map<String, Object> registerUser(
        @RequestBody RegisterRequest request
    ) {
        String name = request.getName();
        String email = request.getEmail();
        String password = request.getPassword();

        System.out.println(name + " " + email + " " + password);

        UserResponse response = userService.registerUser(request);

        Map<String, Object> result = new HashMap<>();
        result.put("id", response.getId());
        result.put("login", response.getLogin());
        result.put("imageLink", response.getImageLink());

        return result;
    }

    @PostMapping("/login")
    public Map<String, Object> loginUser(
        @RequestBody LoginRequest request
    ) {
        String login = request.getLogin();
        String password = request.getPassword();

        System.out.println(login + " " + password);

        UserResponse response = userService.loginUser(request);

        Map<String, Object> result = new HashMap<>();

        result.put("id", response.getId());
        result.put("name", response.getLogin());
        result.put("imageLink", response.getImageLink());
        return result;

    }
}

