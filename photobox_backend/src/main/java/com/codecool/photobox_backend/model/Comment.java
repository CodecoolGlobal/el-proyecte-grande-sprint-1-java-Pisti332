package com.codecool.photobox_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name= "Comment")
@Table(name= "comments")
public class Comment {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String content;
  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name="user_id", referencedColumnName = "id")
  private User user;
  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name="image_id", referencedColumnName = "id")
  private Image image;

  public Comment(String content, User user, Image image) {
    this.content = content;
    this.user = user;
    this.image = image;
  }
}
