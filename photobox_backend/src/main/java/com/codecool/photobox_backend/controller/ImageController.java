package com.codecool.photobox_backend.controller;

import com.codecool.photobox_backend.controller.dtos.image.ImageDTO;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@RestController
@RequestMapping("api/images")
public class ImageController {
    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("{limit}")
    public List<Image> getAllImages(@PathVariable int limit) {
        return imageService.getImagesWithLimit(limit);
    }

    @GetMapping("image/{imageName}")
    public Image getImageByName(@PathVariable String imageName){
        return imageService.getImageByName(imageName);
    }
    @PostMapping("{userId}")
    public void uploadImage(@RequestBody ImageDTO imageDTO, @PathVariable Long userId) throws IOException {
        imageService.uploadImage(imageDTO, userId);
    }
}
