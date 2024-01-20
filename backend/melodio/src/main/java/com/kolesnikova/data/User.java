package com.kolesnikova.data;

import jakarta.persistence.*;
//import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String email;
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Playlist> playlists;
}

