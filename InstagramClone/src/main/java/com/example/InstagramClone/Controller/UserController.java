package com.example.InstagramClone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.User;
import com.example.InstagramClone.Response.MessageResponse;
import com.example.InstagramClone.Service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired // used this instead of writing = new UserService() tells dont make me create
               // this object instead you create it for me and inject it here
    private UserService userService;

    @GetMapping("/id/{id}") // used path variable to get user id from url
    public ResponseEntity<User> findUserByIdHandler(@PathVariable Integer id) throws UserException {
        User user = userService.findUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);

    }

    @GetMapping("/username/{username}")
    public ResponseEntity<User> findUserByUsernameHandler(@PathVariable String username) throws UserException {
        User user = userService.findUserByUsername(username);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PutMapping("/follow/{followUserId}")
    public ResponseEntity<MessageResponse> followUserHandler(@PathVariable Integer followUserId,
            @RequestHeader("Authorization") String token) throws UserException {

        User user = userService.findUserProfile(token);

        String message = userService.followUser(user.getId(), followUserId);

        MessageResponse response = new MessageResponse(message);

        return new ResponseEntity<MessageResponse>(response, HttpStatus.OK);
    }

    @PutMapping("/unfollow/{UserId}")
    public ResponseEntity<MessageResponse> unFollowUserHandler(@PathVariable Integer UserId,
            @RequestHeader("Authorization") String token) throws UserException {

        User user = userService.findUserProfile(token);

        String message = userService.unfollowUser(user.getId(), UserId);

        MessageResponse response = new MessageResponse(message);

        return new ResponseEntity<MessageResponse>(response, HttpStatus.OK);
    }

    @GetMapping("/req")
    public ResponseEntity<User> findUserProfileHandler(@RequestHeader("Authorization") String token)
            throws UserException {

        User user = userService.findUserProfile(token);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/m/{userIds}")
    public ResponseEntity<List<User>> findUserByUserIdsHandler(@PathVariable List<Integer> userIds)
            throws UserException {

        List<User> users = userService.findUserByIds(userIds);
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    // search api endpoint looks like this api/user/search?q = "query" and this
    // query will be used to search user by username or name
    @GetMapping("/search")
    public ResponseEntity<List<User>> searchUserHandler(@RequestParam("q") String query) throws UserException {
        List<User> users = userService.searchUser(query);
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @PutMapping("/account/edit")
    public ResponseEntity<User> updateUserHandler(@RequestHeader("Authorization") String token, @RequestBody User user)
            throws Exception {

        User reqUser = userService.findUserProfile(token);

        User updatedUser = userService.updateUserDetails(user, reqUser);

        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
    }

}
