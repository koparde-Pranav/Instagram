package com.example.InstagramClone.Security;

public class JwtTokenClaims {

    private String username;
    private Integer userId;
     
    public String getUsername() {
        return username;
    }
     
    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

}
