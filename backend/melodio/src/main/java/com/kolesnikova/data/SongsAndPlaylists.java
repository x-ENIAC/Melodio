package com.kolesnikova.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="songsAndPlaylists")
@Getter
@Setter
public class SongsAndPlaylists {
    @Id
    private Long id;
//    @Id
    @Column(name="playlistId")
    private Long playlistId;

//    @Id
    @Column(name="songId")
    private Long songId;
}
