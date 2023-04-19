package com.GamesCR;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GamesCrApplication {

	public static void main(String[] args) {
		Properties props = new Properties();
		try {
			props.load(new FileInputStream("message_en.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		SpringApplication.run(GamesCrApplication.class, args);
	}

}

