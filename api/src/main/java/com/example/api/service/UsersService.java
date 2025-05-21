package com.example.api.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.api.entity.Users;
import com.example.api.repository.UsersRepo;

@Service
public class UsersService {
    private final UsersRepo usersRepo;
    private final PasswordEncoder passwordEncoder;

    public UsersService(UsersRepo usersRepo, PasswordEncoder passwordEncoder){
        this.usersRepo = usersRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public Users registerUser(Users user){
        // hash password, validate input, set fields
        if (user.getPassword() == null) {
            throw new IllegalArgumentException("Password cannot be null");
        }

        String hashedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPass);

        return usersRepo.save(user);
    }
}
