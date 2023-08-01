package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.model.Comment;
import com.codecool.photobox_backend.repository.CommentRepository;
import com.codecool.photobox_backend.repository.ImageRepository;
import com.codecool.photobox_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class CommentService {
  private CommentRepository commentRepository;
  private ImageRepository imageRepository;
  private UserRepository userRepository;

  public CommentService(CommentRepository commentRepository, ImageRepository imageRepository, UserRepository userRepository) {
    this.commentRepository = commentRepository;
    this.imageRepository = imageRepository;
    this.userRepository = userRepository;
  }

  public Set<Comment> getComments(Long userId, UUID imageId) {
    return imageRepository.getById(imageId).getComments();
  }

  public void addComment(Comment comment, Long userId, UUID imageId) {
    imageRepository.getById(imageId).getComments().add(comment);
  }
}
