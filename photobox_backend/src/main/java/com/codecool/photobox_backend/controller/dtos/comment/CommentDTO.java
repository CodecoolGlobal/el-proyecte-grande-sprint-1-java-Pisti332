package com.codecool.photobox_backend.controller.dtos.comment;

import lombok.Builder;

import java.util.UUID;
@Builder
public record CommentDTO(String content, Long userId, UUID imageId) {
}
