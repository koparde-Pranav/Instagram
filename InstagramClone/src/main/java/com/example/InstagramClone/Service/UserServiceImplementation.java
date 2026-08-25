package com.example.InstagramClone.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.InstagramClone.DTO.UserDto;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.User;
import com.example.InstagramClone.Repository.UserRepository;
import com.example.InstagramClone.Security.JwtTokenClaims;
import com.example.InstagramClone.Security.JwtTokenProvider;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired 
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public User registerUser(User user) throws UserException {

        Optional<User> isEmailExist = userRepository.findByEmail(user.getEmail());
        if (isEmailExist.isPresent()) {
            throw new UserException("Email already exists");
        }

        Optional<User> isUsernameExist = userRepository.findByUsername(user.getUsername());
        if (isUsernameExist.isPresent()) {
            throw new UserException("Username already exists");
        }

        if (user.getEmail() == null || user.getPassword() == null || user.getUsername() == null
                || user.getName() == null) {
            throw new UserException("All fields are required");
        }

        User newUser = new User();

        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setUsername(user.getUsername());
        newUser.setName(user.getName());

        return userRepository.save(newUser);
    }

    @Override
    public User findUserById(Integer id) throws UserException {

        Optional<User> opt = userRepository.findById(id);

        if (opt.isPresent()) {
            return opt.get();
        }
        throw new UserException("User doesnt exist with id: " + id);
    }

    @Override
    public User findUserProfile(String token) throws UserException {
        token = token.substring(7);
        JwtTokenClaims jwtTokenClaims = jwtTokenProvider.getClaimsFromToken(token);
        String username = jwtTokenClaims.getUsername();
        Optional<User> opt = userRepository.findByUsername(username);
        if (opt.isPresent()) {
            return opt.get();
        }

        throw new UserException("Invalid token");
    }

    @Override
    public User findUserByUsername(String username) throws UserException {

        Optional<User> opt = userRepository.findByUsername(username);

        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new UserException("User doesnt exist with username: " + username);
        }
    }

    @Override
    public String followUser(Integer reqUserId, Integer followUserId) throws UserException {

        User reqUser = findUserById(reqUserId);
        User followUser = findUserById(followUserId);

        UserDto follower = new UserDto();

        follower.setEmail(reqUser.getEmail());
        follower.setId(reqUser.getId());
        follower.setName(reqUser.getName());
        follower.setUserImage(reqUser.getImage());
        follower.setUsername(reqUser.getUsername());

        UserDto following = new UserDto();
        following.setEmail(followUser.getEmail());
        following.setId(followUser.getId());
        following.setUserImage(followUser.getImage());
        following.setName(followUser.getName());
        following.setUsername(followUser.getUsername());

        reqUser.getFollowing().add(following);
        followUser.getFollowers().add(follower);

        userRepository.save(followUser);
        userRepository.save(reqUser);

        return "You are now following " + followUser.getUsername();
    }

    @Override
    public String unfollowUser(Integer reqUserId, Integer unfollowUserId) throws UserException {
        User reqUser = findUserById(reqUserId);
        User followUser = findUserById(unfollowUserId);

        UserDto follower = new UserDto();

        follower.setEmail(reqUser.getEmail());
        follower.setId(reqUser.getId());
        follower.setName(reqUser.getName());
        follower.setUserImage(reqUser.getImage());
        follower.setUsername(reqUser.getUsername());

        UserDto following = new UserDto();
        following.setEmail(followUser.getEmail());
        following.setId(followUser.getId());
        following.setUserImage(followUser.getImage());
        following.setName(followUser.getName());
        following.setUsername(followUser.getUsername());

        reqUser.getFollowing().remove(follower);
        followUser.getFollowers().remove(follower);

        userRepository.save(followUser);
        userRepository.save(reqUser);

        return "You are no longer following " + followUser.getUsername();
    }

    @Override
    public List<User> findUserByIds(List<Integer> userIds) throws UserException {

        List<User> users = userRepository.findAllById(userIds);
        return users;
    }

    @Override
    public List<User> searchUser(String query) throws UserException {

        List<User> users = userRepository.findByQuery(query);
        if (users.isEmpty()) {
            throw new UserException("User not found");
        }
        return users;
    }

    @Override
    public User updateUserDetails(User updatedUser, User existingUser) throws UserException {

        if (updatedUser.getEmail() != null) {
            existingUser.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getBio() != null) {
            existingUser.setBio(updatedUser.getBio());
        }
        if (updatedUser.getName() != null) {
            existingUser.setName(updatedUser.getName());
        }
        if (updatedUser.getUsername() != null) {
            existingUser.setUsername(updatedUser.getUsername());
        }
        if (updatedUser.getMobile() != null) {
            existingUser.setMobile(updatedUser.getMobile());
        }
        if (updatedUser.getGender() != null) {
            existingUser.setGender(updatedUser.getGender());
        }
        if (updatedUser.getWebsite() != null) {
            existingUser.setWebsite(updatedUser.getWebsite());
        }
        if (updatedUser.getImage() != null) {
            existingUser.setImage(updatedUser.getImage());
        }
        if (updatedUser.getId() == existingUser.getId()) {
            return userRepository.save(existingUser);
        } else {
            throw new UserException("You cant update this user profile");
        }
    }

}
