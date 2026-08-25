package com.example.InstagramClone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.InstagramClone.Exception.StoryException;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.Story;
import com.example.InstagramClone.Modal.User;
import com.example.InstagramClone.Service.StoryService;
import com.example.InstagramClone.Service.UserService;

@RestController
@RequestMapping("/api/stories")
public class StoryController {


    @Autowired
    private UserService userService;

    @Autowired
    private StoryService storyService;

    @PostMapping("/create")
    public ResponseEntity<Story> createStoryHandler(@RequestBody Story story, @RequestHeader("Authorization") String token) throws UserException {

        User user = userService.findUserProfile(token);

        Story createdStory = storyService.createStory(story, user.getId());

        return new ResponseEntity<Story>(createdStory, HttpStatus.OK);
    }

    @RequestMapping("/{userId}")
    public ResponseEntity<List<Story>> findAllStoriesByUserIdHandler(@PathVariable Integer userId) throws UserException, StoryException {
        

        List<Story> stories = storyService.findStoryByUserId(userId);

        return new ResponseEntity<List<Story>>(stories, HttpStatus.OK);
        
    }

}
