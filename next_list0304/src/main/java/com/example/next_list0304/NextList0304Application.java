package com.example.next_list0304;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.next_list0304.mapper")
public class NextList0304Application {

	public static void main(String[] args) {
		SpringApplication.run(NextList0304Application.class, args);
	}

}
