package com.codecool.photobox_backend.controller.dtos.image;

public record NewImageDTO(String imageName, String username, String path, String imageData, String format) {
}
