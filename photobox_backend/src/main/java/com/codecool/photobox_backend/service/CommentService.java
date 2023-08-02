package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.comment.CommentDTO;
import com.codecool.photobox_backend.model.Comment;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.CommentRepository;
import com.codecool.photobox_backend.repository.ImageRepository;
import com.codecool.photobox_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CommentService {
  private final CommentRepository commentRepository;
  private final ImageRepository imageRepository;
  private final UserRepository userRepository;

  public CommentService(CommentRepository commentRepository, ImageRepository imageRepository, UserRepository userRepository) {
    this.commentRepository = commentRepository;
    this.imageRepository = imageRepository;
    this.userRepository = userRepository;
  }

  public Set<Comment> getComments(Long userId, UUID imageId) {
    return imageRepository.getById(imageId).getComments();
  }

  public void addComment(CommentDTO comment) {
    User user = userRepository.getById(comment.userId());
    Image image = imageRepository.getById(comment.imageId());
    Comment newComment = new Comment(comment.content(),user,image);
    commentRepository.save(newComment);
  }
}
