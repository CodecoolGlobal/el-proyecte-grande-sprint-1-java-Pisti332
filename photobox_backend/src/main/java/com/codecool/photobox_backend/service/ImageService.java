package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.image.ImageDTO;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.ImageRepository;
import com.codecool.photobox_backend.repository.UserRepository;
import com.codecool.photobox_backend.service.utility.ImageConverter;
import com.codecool.photobox_backend.service.utility.ImageWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    private ImageRepository imageRepository;
    private ImageConverter imageConverter;
    private ImageWriter imageWriter;
    private UserRepository userRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository,
                        ImageConverter imageConverter,
                        ImageWriter imageWriter,
                        UserRepository userRepository) {
        this.imageRepository = imageRepository;
        this.imageConverter = imageConverter;
        this.imageWriter = imageWriter;
        this.userRepository = userRepository;
    }

    public List<Image> getImagesWithLimit(int limit) {
//        return foldersFilesReader.readFileNames(ImageRepository.IMAGES_FOLDER_PATH);
        return imageRepository.getImagesWithLimit(limit);
    }

    public void uploadImage(ImageDTO imageDTO, Long userId) throws IOException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            BufferedImage bufferedImage = imageConverter.convert(imageDTO.imageData());
            String modifiedName = imageDTO.imageName().replace('%', 'a');
            System.out.println(imageDTO.imageName());
            imageWriter.saveImageAsFile(bufferedImage,
                    modifiedName,
                    ImageRepository.IMAGES_FOLDER_PATH,
                    imageDTO.format());
            Image imageToSave = Image.builder()
                    .name(modifiedName)
                    .user(user.get())
                    .build();
            imageRepository.save(imageToSave);
        }
    }
}
