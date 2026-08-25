package com.example.InstagramClone.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.InstagramClone.DTO.UserDto;
import com.example.InstagramClone.Exception.PostException;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.Post;
import com.example.InstagramClone.Modal.User;
import com.example.InstagramClone.Repository.PostRepository;
import com.example.InstagramClone.Repository.UserRepository;

@Service
public class PostServiceImplementation implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Post createPost(Post post, Integer userId) throws UserException, PostException {
        User user = userService.findUserById(userId);
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUsername());
        post.setUser(userDto);

        Post createdPost = postRepository.save(post);
        return createdPost;
    }

    @Override
    public String deletePost(Integer postId, Integer userId) throws UserException, PostException {
        Post post = findPostById(postId);
        if (post.getUser().getId().equals(userId)) {
            postRepository.delete(post);
            return "Post deleted successfully";
        }
        throw new PostException("You are not authorized to delete this post");
    }

    @Override
    public List<Post> findPostsByUserId(Integer userId) throws UserException, PostException {
        List<Post> posts = postRepository.findByUserId(userId);
        if (posts.size() == 0) {
            throw new PostException("No posts found for the user with ID: " + userId);
        }
        return posts;
    }

    @Override
    public Post findPostById(Integer postId) throws PostException {
        Optional<Post> post = postRepository.findById(postId);
        if (post.isPresent()) {
            return post.get();
        }
        throw new PostException("Post not found with ID: " + postId);
    }

    @Override
    public List<Post> findAllPostsByUserIds(List<Integer> userIds) throws PostException, UserException {
        List<Post> posts = postRepository.findAllPostsByUserIds(userIds);
        if (posts.size() == 0) {
            throw new PostException("No posts found for the given user IDs");
        }
        return posts;
    }

    @Override
    public String savedPost(Integer postId, Integer userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);
        if (!user.getSavedPost().contains(post)) {
            user.getSavedPost().add(post);
            userRepository.save(user);
            return "Post saved successfully";
        }
        throw new PostException("Post is already saved by the user");
    }

    @Override
    public String unsavedPost(Integer postId, Integer userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);
        if (user.getSavedPost().contains(post)) {
            user.getSavedPost().remove(post);
            userRepository.save(user);
            return "Post unsaved successfully";
        }
        throw new PostException("Post can't be unsaved as it is not saved by the user");
    }

    @Override
    public Post likePost(Integer postId, Integer userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);
        
        UserDto userDto = new UserDto();

        userDto.setEmail(user.getEmail());
        userDto.setId(userId);
        userDto.setName(user.getName());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUsername());

        post.getLikedByUsers().add(userDto);
        postRepository.save(post);
        return post;
    }

    @Override
    public Post unlikePost(Integer postId, Integer userId) throws UserException, PostException {
                Post post = findPostById(postId);
        User user = userService.findUserById(userId);
        
        UserDto userDto = new UserDto();

        userDto.setEmail(user.getEmail());
        userDto.setId(userId);
        userDto.setName(user.getName());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUsername());

        post.getLikedByUsers().remove(userDto);
        postRepository.save(post);
        return post; 
    }

}
