package com.example.InstagramClone.Service;

import java.util.List;

import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.User;

public interface UserService {

    public User registerUser(User user) throws UserException;

    public User findUserById(Integer id) throws UserException;

    public User findUserProfile(String token) throws UserException;

    public User findUserByUsername(String username) throws UserException;

    public String followUser(Integer reqUserId, Integer followUserId) throws UserException;

    public String unfollowUser(Integer reqUserId, Integer unfollowUserId) throws UserException;

    public List<User> findUserByIds(List<Integer> userIds) throws UserException;

    public List<User> searchUser(String query) throws UserException;

    public User updateUserDetails(User updatedUser, User existingUser) throws UserException;
}
