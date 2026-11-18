package com.example.demo.backend.auth;

public class RegisterRequest{
    private String name = "";
    private String last_name = "";
    private String email = "";
    private String birthday = "";
    private String age = "";
    private String login = "";
    private String password = "";

    public String getName(){
        return this.name;
    }
    public String getLastName(){
        return this.last_name;
    }
    public String getEmail(){
        return this.email;
    }
    public String getBirthday(){
        return this.birthday;
    }
    public String getAge(){
        return this.age;
    }
    public String getLogin(){
        return this.login;
    }
    public String getPassword(){
        return this.password;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setLastName(String lastName){
        this.last_name = lastName;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setBirthday(String birthday){
        this.birthday = birthday;
    }
    public void setAge(String age){
        this.age = age;
    }
    public void setLogin(String login){
        this.login = login;
    }
    public void setPassword(String password){
        this.password = password;
    }
    

}