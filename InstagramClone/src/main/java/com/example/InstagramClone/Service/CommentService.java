package com.example.InstagramClone.Service;

import com.example.InstagramClone.Exception.CommentException;
import com.example.InstagramClone.Exception.PostException;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.Comment;

public interface CommentService {

    public Comment createComment(Comment comment, Integer postId, Integer userId) throws UserException, PostException;

    public Comment findCommentById(Integer commentId) throws CommentException;

    public Comment likeComment(Integer commentId, Integer userId) throws CommentException, UserException;

    public Comment unlikeComment(Integer commentId, Integer userId) throws CommentException, UserException;

}
