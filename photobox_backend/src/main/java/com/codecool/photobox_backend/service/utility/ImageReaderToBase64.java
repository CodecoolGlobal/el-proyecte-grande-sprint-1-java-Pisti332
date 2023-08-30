package com.codecool.photobox_backend.service.utility;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Base64;

@Service
public class ImageReaderToBase64 {
    public String convert(String filePath) {
        System.out.println(filePath);
        try {
            System.out.println(filePath);
            File file = new File(filePath);
            byte[] fileContent = FileUtils.readFileToByteArray(file);
            return Base64.getEncoder().encodeToString(fileContent);
        }
        catch (IOException e) {
            return "";
        }
    }
}
