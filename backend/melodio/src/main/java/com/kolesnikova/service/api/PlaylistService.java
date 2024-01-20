package com.kolesnikova.service.api;

import com.kolesnikova.service.dto.PlaylistDto;
import com.kolesnikova.service.dto.SongDto;

import java.util.List;

public interface PlaylistService {
    PlaylistDto createPlaylist(PlaylistDto playlistDto);
    PlaylistDto deletePlaylist (Long playlistId);
    PlaylistDto getPlaylistById(Long playlistId);

    List<PlaylistDto> getAllPlaylists();

    List<SongDto> getSongsFromPlaylists(Long playlistId);
    List<PlaylistDto> getUserPlaylists(Long userId);
    // Предполагаю, что в базе понравившиеся песни пользователя
    // хранятся в виде отдельного плейлиста
    PlaylistDto getUserLikedSongs(Long userId);
    PlaylistDto addSongToPlaylist(Long playlistId, Long songId);
    PlaylistDto deleteSongFromPlaylist(Long playlistId, Long songId);
}

