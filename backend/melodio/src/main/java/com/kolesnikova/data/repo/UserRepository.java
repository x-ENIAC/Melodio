package com.kolesnikova.data.repo;

import com.kolesnikova.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserById(Long id);
    User findByLogin(String login);
    User findByEmail(String email);
}