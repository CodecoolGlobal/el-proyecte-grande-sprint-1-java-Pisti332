package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.image.ImageDTO;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.ImageRepository;
import com.codecool.photobox_backend.repository.UserRepository;
import com.codecool.photobox_backend.service.utility.FoldersFilesReader;
import com.codecool.photobox_backend.service.utility.ImageConverter;
import com.codecool.photobox_backend.service.utility.ImageWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    private ImageRepository imageRepository;
    private ImageConverter imageConverter;
    private ImageWriter imageWriter;
    private FoldersFilesReader foldersFilesReader;
    private UserRepository userRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository,
                        ImageConverter imageConverter,
                        ImageWriter imageWriter,
                        FoldersFilesReader foldersFilesReader,
                        UserRepository userRepository) {
        this.imageRepository = imageRepository;
        this.imageConverter = imageConverter;
        this.imageWriter = imageWriter;
        this.foldersFilesReader = foldersFilesReader;
        this.userRepository = userRepository;
    }

    public List<String> getAllImageNames() {
        return foldersFilesReader.readFileNames(ImageRepository.IMAGES_FOLDER_PATH);
//        return imageRepository.findAll();
    }

    public void uploadImage(ImageDTO imageDTO, Long userId) throws IOException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            BufferedImage bufferedImage = imageConverter.convert(imageDTO.imageData());
            imageWriter.saveImageAsFile(bufferedImage,
                    imageDTO.imageName(),
                    ImageRepository.IMAGES_FOLDER_PATH,
                    imageDTO.format());
            Image imageToSave = Image.builder()
                    .name(imageDTO.imageName())
                    .path(ImageRepository.IMAGES_FOLDER_PATH)
                    .user(user.get())
                    .build();
            imageRepository.save(imageToSave);
        }
    }
}
