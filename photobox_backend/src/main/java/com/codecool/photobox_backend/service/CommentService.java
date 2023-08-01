package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.model.Comment;
import com.codecool.photobox_backend.repository.CommentRepository;
import com.codecool.photobox_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentService {
  private CommentRepository commentRepository;
  private UserRepository userRepository;



  public List<Comment> getComments(Long userId, UUID imageId) {

    return commentRepository.findAllByImageId(imageId);
  }
}
