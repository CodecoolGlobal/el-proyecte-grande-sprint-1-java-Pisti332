package com.codecool.photobox_backend.service.utility;


import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
@Service
public class ImageWriter {
    public void saveImageAsFile(BufferedImage bufferedImage, String name, String path, String format) throws IOException {
        File outputfile = new File(path + "//" + name);
        ImageIO.write(bufferedImage, format, outputfile);
    }
}
