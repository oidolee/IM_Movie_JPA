package springBoot.ict.movie;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("springBoot.ict.movie.repository")
public class ImMovie1Application {

    public static void main(String[] args) {
        SpringApplication.run(ImMovie1Application.class, args);
    }
}
