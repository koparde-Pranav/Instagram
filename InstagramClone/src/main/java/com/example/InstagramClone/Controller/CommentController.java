package com.example.InstagramClone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.InstagramClone.Exception.CommentException;
import com.example.InstagramClone.Exception.PostException;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.Comment;
import com.example.InstagramClone.Modal.User;
import com.example.InstagramClone.Service.CommentService;
import com.example.InstagramClone.Service.UserService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @PostMapping("/create/{postId}")
    public ResponseEntity<Comment> createCommentHandler(@RequestBody Comment comment,
            @RequestHeader("Authorization") String token, @PathVariable Integer postId)
            throws UserException, PostException {

        User user = userService.findUserProfile(token);

        Comment createdComment = commentService.createComment(comment, postId, user.getId());

        return new ResponseEntity<Comment>(createdComment, HttpStatus.OK);
    }

    @PutMapping("/like/{commentId}")
    public ResponseEntity<Comment> likeCommentHandler(@RequestHeader("Authorization") String token,
            @PathVariable Integer commentId) throws UserException, CommentException {

        User user = userService.findUserProfile(token);

        Comment comment = commentService.likeComment(commentId, user.getId());

        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }

    @PutMapping("/unlike/{commentId}")
    public ResponseEntity<Comment> unlikeCommentHandler(@RequestHeader("Authorization") String token,
            @PathVariable Integer commentId)
            throws UserException, CommentException {

        User user = userService.findUserProfile(token);

        Comment comment = commentService.unlikeComment(commentId, user.getId());

        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }

}
