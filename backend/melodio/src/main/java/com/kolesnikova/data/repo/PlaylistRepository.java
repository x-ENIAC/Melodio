package com.kolesnikova.data.repo;

import com.kolesnikova.data.Playlist;
import com.kolesnikova.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
    Playlist findPlaylistById(Long playlistId);
    Playlist deletePlaylistById(Long playlistId);
    Playlist updatePlaylistById(Playlist newPlaylist);
}

