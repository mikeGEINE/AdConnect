package com.bmstu.adconnect.repositories;

import java.util.Optional;

import com.bmstu.adconnect.models.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public Optional<User> findByEmail(String email);
    public boolean existsByEmail(String email);  
}
