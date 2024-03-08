package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import springBoot.ict.movie.dto.CustomerDTO;

public interface CustomerRepository extends JpaRepository<CustomerDTO, Integer> {

}
