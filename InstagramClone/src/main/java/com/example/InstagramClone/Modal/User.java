package com.example.InstagramClone.Modal;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.example.InstagramClone.DTO.UserDto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity // tells JPA that this class is an entity and should be mapped to a database
        // table
@Table(name = "users") // specifies the name of the database table to be used for mapping. In this
                       // case, the table will be named "users".
public class User {

    @Id // this annotation indicates that the field it annotates is the primary key of
        // the entity. In this case, the "id" field is the primary key for the User
        // entity.
    @GeneratedValue(strategy = GenerationType.AUTO) // this annotation is used to specify how the primary key should be
                                                    // generated. The GenerationType.AUTO strategy allows the
                                                    // persistence provider (e.g., Hibernate) to choose the appropriate
                                                    // generation strategy based on the database dialect being used. It
                                                    // may use an auto-incrementing column, a sequence, or another
                                                    // mechanism depending on the database.
    private Integer id;

    private String username;
    private String name;
    private String email;
    private String mobile;
    private String website;
    private String bio;
    private String gender;
    private String image;

    private String password;

    @Embedded
    @ElementCollection
    private Set<UserDto> followers = new HashSet<UserDto>();

    @Embedded
    @ElementCollection
    private Set<UserDto> following = new HashSet<UserDto>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Story> stories = new ArrayList<>();

    @ManyToMany
    private List<Post> savedPost = new ArrayList<>();

    public User() {

    }

    public User(Integer id, String username, String name, String email, String mobile, String website, String bio,
            String gender, String image, String password, Set<UserDto> followers, Set<UserDto> following,
            List<Story> stories, List<Post> savedPost) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.website = website;
        this.bio = bio;
        this.gender = gender;
        this.image = image;
        this.password = password;
        this.followers = followers;
        this.following = following;
        this.stories = stories;
        this.savedPost = savedPost;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<UserDto> getFollowers() {
        return followers;
    }

    public void setFollowers(Set<UserDto> followers) {
        this.followers = followers;
    }

    public Set<UserDto> getFollowing() {
        return following;
    }

    public void setFollowing(Set<UserDto> following) {
        this.following = following;
    }

    public List<Story> getStories() {
        return stories;
    }

    public void setStories(List<Story> stories) {
        this.stories = stories;
    }

    public List<Post> getSavedPost() {
        return savedPost;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", username=" + username + ", name=" + name + ", email=" + email + ", mobile="
                + mobile + ", website=" + website + ", bio=" + bio + ", gender=" + gender + ", image=" + image
                + ", password=" + password + ", followers=" + followers + ", following=" + following + ", stories="
                + stories + ", savedPost=" + savedPost + "]";
    }

    public void setSavedPost(List<Post> savedPost) {
        this.savedPost = savedPost;
    }

}
