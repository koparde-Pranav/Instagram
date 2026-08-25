package com.example.InstagramClone.Service;

import java.util.List;

import com.example.InstagramClone.Exception.PostException;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.Post;

public interface PostService {

    public Post createPost(Post post, Integer userId) throws UserException, PostException;

    public String deletePost(Integer postId, Integer userId) throws UserException, PostException;

    public List<Post> findPostsByUserId(Integer userId) throws UserException, PostException;

    public Post findPostById(Integer postId) throws PostException;

    public List<Post> findAllPostsByUserIds(List<Integer> userIds) throws PostException, UserException;

    public String savedPost(Integer postId, Integer userId) throws UserException, PostException;

    public String unsavedPost(Integer postId, Integer userId) throws UserException, PostException;

    public Post likePost(Integer postId, Integer userId) throws UserException, PostException;

    public Post unlikePost(Integer postId, Integer userId) throws UserException, PostException;
}
