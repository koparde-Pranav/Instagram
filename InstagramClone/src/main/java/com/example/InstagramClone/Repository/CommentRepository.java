package com.example.InstagramClone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.InstagramClone.Modal.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
