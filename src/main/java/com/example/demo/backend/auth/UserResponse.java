package com.example.demo.backend.auth;

public class UserResponse{
    final private Long id;
    final private String login;
    final private String imageLink;


    public UserResponse(Long id, String login, String imageLink){
        this.id = id;
        this.login = login;
        this.imageLink = imageLink;
    }
    public Long getId(){
        return this.id;
    }
    public String getLogin(){
        return this.login;
    }
    public String getImageLink(){
        return this.imageLink;
    }

}