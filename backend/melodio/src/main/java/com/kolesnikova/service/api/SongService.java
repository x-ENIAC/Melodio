package com.kolesnikova.service.api;

import com.kolesnikova.data.Song;
import com.kolesnikova.service.dto.SongDto;

import java.util.List;

public interface SongService {
    SongDto getSongById(Long songId);

    List<SongDto> getAllSongs();

    Boolean changeSongState(String songName, Boolean action); // В будущем - enum

    SongDto createSong(SongDto songDto);
    SongDto deleteSong(Long sondId);
    SongDto changeSongLikedStateForUser(Long songId, Long userId);
    List<SongDto> searchSongsByName(String songNameSubstring);
}
