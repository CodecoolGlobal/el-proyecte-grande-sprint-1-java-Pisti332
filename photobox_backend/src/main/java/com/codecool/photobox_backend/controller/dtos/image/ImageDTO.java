package com.codecool.photobox_backend.controller.dtos.image;

import lombok.Builder;

@Builder
public record ImageDTO(String imageName,
                       Long userId,
                       String imageData,
                       String format,
                       String path
                       ) {
}
