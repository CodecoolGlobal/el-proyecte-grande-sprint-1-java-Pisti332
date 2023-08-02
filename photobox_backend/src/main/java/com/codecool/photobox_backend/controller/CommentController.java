package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.comment.CommentDTO;
import com.codecool.photobox_backend.model.Comment;
import com.codecool.photobox_backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@RestController
@RequestMapping("api")
public class CommentController {
  private CommentService commentService;

  @Autowired
  public CommentController(CommentService commentService) {
    this.commentService = commentService;
  }

  @GetMapping("{user_id}/{image_id}")
  public Set<Comment> getComments(@PathVariable Long user_id, @PathVariable UUID image_id) {
    return commentService.getComments(user_id, image_id);
  }

  @PostMapping("comment")
  public void addComment(@RequestBody CommentDTO comment){
    commentService.addComment(comment);
  }
}
