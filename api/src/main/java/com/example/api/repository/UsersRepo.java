package com.example.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.api.entity.Users;

@Repository
public interface UsersRepo extends MongoRepository<Users, String>{
    
}
