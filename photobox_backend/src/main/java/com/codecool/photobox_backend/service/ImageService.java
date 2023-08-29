package com.codecool.photobox_backend.service;

import com.codecool.photobox_backend.controller.dtos.image.ImageDTO;
import com.codecool.photobox_backend.controller.dtos.image.ImagesDTO;
import com.codecool.photobox_backend.model.Image;
import com.codecool.photobox_backend.model.User;
import com.codecool.photobox_backend.repository.ImageRepository;
import com.codecool.photobox_backend.repository.UserRepository;
import com.codecool.photobox_backend.service.utility.ImageConverter;
import com.codecool.photobox_backend.service.utility.ImageReaderToBase64;
import com.codecool.photobox_backend.service.utility.ImageWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ImageService {
    private ImageRepository imageRepository;
    private ImageConverter imageConverter;
    private ImageWriter imageWriter;
    private UserRepository userRepository;
    private ImageReaderToBase64 imageReaderToBase64;

    @Autowired
    public ImageService(ImageRepository imageRepository,
                        ImageConverter imageConverter,
                        ImageWriter imageWriter,
                        UserRepository userRepository,
                        ImageReaderToBase64 imageReaderToBase64) {
        this.imageRepository = imageRepository;
        this.imageConverter = imageConverter;
        this.imageWriter = imageWriter;
        this.userRepository = userRepository;
        this.imageReaderToBase64 = imageReaderToBase64;
    }

    public ImagesDTO getImagesWithLimit(int limit) {
        List<Image> images = imageRepository.getImagesWithLimit(limit);
        String folderPath = System.getenv("IMAGES_FOLDER_PATH");
        HashMap<String, String> imagesMap = new HashMap<>();
        if (images.size() > 0) {
            for (int i = 0; i < limit && i < images.size(); i++) {
                String base64 = imageReaderToBase64.convert(folderPath + "\\" + images.get(i).getName());
                imagesMap.put(images.get(i).getName(), base64);
            }
        }
        return new ImagesDTO(imagesMap);
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

  public Image getImageByName(String name) {
        return imageRepository.getImageByName(name);
  }
}
