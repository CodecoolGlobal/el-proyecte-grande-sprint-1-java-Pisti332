package com.codecool.photobox_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(
        name = "image"
)
@Table(
        name = "images"
)
public class Image {
    @Id
    @GeneratedValue()
    private UUID id;
    private String name;
    private String path;
//    private User user;
//    private Set<Comment> comments;
}
