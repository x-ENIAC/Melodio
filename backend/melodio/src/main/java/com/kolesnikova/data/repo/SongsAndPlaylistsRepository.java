package com.kolesnikova.data.repo;

import com.kolesnikova.data.Playlist;
import com.kolesnikova.data.SongsAndPlaylists;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongsAndPlaylistsRepository extends JpaRepository<SongsAndPlaylists, Long> {
    @Query("SELECT songId FROM SongsAndPlaylists WHERE playlistId = :playlistId")
    List<Long> findSongsAndPlaylistsByPlaylistId(@Param("playlistId") Long playlistId);
    List<Playlist> findSongsAndPlaylistsBySongId(Long songId);
}