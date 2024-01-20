package com.kolesnikova.data.repo;

import com.kolesnikova.data.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
    Song findByName(String name);
    Song deleteSongById(Long id);
    Song updateSongById(Song newSong);
}