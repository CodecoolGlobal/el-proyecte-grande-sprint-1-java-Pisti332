package com.codecool.photobox_backend.controller.dtos.image;

import java.util.UUID;

public record ImageWithIdDTO(
        UUID imageId,
        String data,
        String username
) {
}
