package springBoot.ict.movie.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


// 리액트에서 회원가입시 저장
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class SignUpDTO {
	
	private int no;
    private String id;
    private String name;
    private String password;
    private String hp;
    private Date birthday;
    private String address;
    private Date regdate;
    private String state;
    private String type;
    
    private String token;
	
}
