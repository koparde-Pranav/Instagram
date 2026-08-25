package com.example.InstagramClone.Service;

import java.util.List;

import com.example.InstagramClone.Exception.StoryException;
import com.example.InstagramClone.Exception.UserException;
import com.example.InstagramClone.Modal.Story;

public interface StoryService {

    public Story createStory(Story story, Integer userId) throws UserException;

    public List<Story> findStoryByUserId(Integer userId) throws UserException, StoryException;

}
