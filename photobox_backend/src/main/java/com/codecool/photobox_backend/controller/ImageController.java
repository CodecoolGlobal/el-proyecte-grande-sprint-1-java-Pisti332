package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.image.ImageDTO;
import com.codecool.photobox_backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequestMapping("api/images")
public class ImageController {
    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping
    public List<String> getAllImages() {
        return imageService.getAllImageNames();
    }
    @PostMapping("{userId}")
    public void uploadImage(@RequestBody ImageDTO imageDTO, @PathVariable Long userId) throws IOException {
        imageService.uploadImage(imageDTO, userId);
    }
}
