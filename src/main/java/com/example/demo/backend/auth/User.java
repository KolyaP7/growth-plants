package com.example.demo.backend.auth;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, unique = true)
    String login;

    @Column(nullable = false)
    String password;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String lastName;

    @Column(unique = true)
    String email;

    @Column()
    String imageLink;

    public Long getId(){
        return this.id;
    }
    public String getLogin(){
        return this.login;
    }
    public String getPassword(){
        return this.password;
    }
    public String getName(){
        return this.name;
    }
    public String getLastName(){
        return this.lastName;
    }
    public String getEmail(){
        return this.email;
    }
    public String getImageLink(){
        return this.imageLink;
    }
    public void setId(Long id){
        this.id = id;
    }
    public void setLogin(String login){
        this.login = login;

    }
    public void setPassword(String password){
        this.password = password;

    }
    public void setName(String name){
        this.name = name;

    }
    public void setLastName(String lastName){
        this.lastName = lastName;

    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setImageLink(String imageLink){
        this.imageLink = imageLink;
    }

}
