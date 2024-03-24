package springBoot.ict.movie.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserDTO {
    
    
    private int no;
    private String id;
    private String name;
    private String password;
    private String hp;
    private Date birthday;
    private String address;
    private Date regdate;
    private String state;
    
    private String token;
    
    
    
    
}
