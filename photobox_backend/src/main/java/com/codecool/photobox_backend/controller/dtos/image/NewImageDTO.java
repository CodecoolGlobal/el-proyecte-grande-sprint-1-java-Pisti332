package com.codecool.photobox_backend.controller.dtos.image;

import com.codecool.photobox_backend.model.User;

public record NewImageDTO(String imageName, Long userId, String imageData, String format) {
}
