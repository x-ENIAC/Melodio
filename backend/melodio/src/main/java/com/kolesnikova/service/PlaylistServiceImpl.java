package com.kolesnikova.service;

import com.kolesnikova.data.Playlist;
import com.kolesnikova.data.Song;
import com.kolesnikova.data.repo.PlaylistRepository;
import com.kolesnikova.data.repo.SongRepository;
import com.kolesnikova.data.repo.SongsAndPlaylistsRepository;
import com.kolesnikova.service.api.PlaylistService;
import com.kolesnikova.service.conterters.PlaylistConverter;
import com.kolesnikova.service.conterters.SongConverter;
import com.kolesnikova.service.dto.PlaylistDto;
import com.kolesnikova.service.dto.SongDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlaylistServiceImpl implements PlaylistService {
    private final PlaylistRepository playlistRepository;
    private final PlaylistConverter playlistConverter;
    private final SongRepository songRepository;
    private final SongConverter songConverter;
    private final SongsAndPlaylistsRepository songsAndPlaylistsRepository;

    @Override
    public PlaylistDto createPlaylist(PlaylistDto playlistDto) {
        System.out.println("---createPlaylist--- playlistDto id:" + playlistDto.getId()
            + ", name: " + playlistDto.getName());
        Playlist playlist = playlistConverter.toEntity(playlistDto);
        System.out.println("---createPlaylist--- playlist id:" + playlist.getId()
            + ", name: " + playlist.getName() + ", userId:");
        Playlist newPlaylist = playlistRepository.save(playlist);
        return playlistConverter.toDto(newPlaylist);
    }

    @Override
    public PlaylistDto deletePlaylist(Long playlistId) {
        Playlist playlist = playlistRepository.findById(playlistId).orElse(null);
        if (playlist == null) {
            return null;
        }
        playlistRepository.deleteById(playlistId);
        return playlistConverter.toDto(playlist);
    }

    @Override
    public PlaylistDto getPlaylistById(Long playlistId) {
        Playlist playlist = playlistRepository.findById(playlistId).orElse(null);
        if (playlist == null) {
            return null;
        }
        return playlistConverter.toDto(playlist);
    }

    public List<PlaylistDto> getAllPlaylists() {
        List<Playlist> allPlaylists = playlistRepository.findAll();
        return playlistConverter.toDto(allPlaylists);
    }

    @Override
    public List<PlaylistDto> getUserPlaylists(Long userId) {
        List<Playlist> allPlaylists = playlistRepository.findAll();
        List<Playlist> userPlaylists = new ArrayList<>();
        for (Playlist playlist : allPlaylists) {
            if (playlist.getUser() != null
                    && Objects.equals(playlist.getUser().getId(), userId)) {
                userPlaylists.add(playlist);
            }
        }
        return playlistConverter.toDto(userPlaylists);
    }

    @Override
    public List<SongDto> getSongsFromPlaylists(Long playlistId) {
        List<Song> songs = new ArrayList<>();
        List<Long> songsId = songsAndPlaylistsRepository.findSongsAndPlaylistsByPlaylistId(playlistId);

        for (Long songId : songsId) {
            songRepository.findById(songId).ifPresent(songs::add);
        }

        return songConverter.toDto(songs);
    }

    @Override
    public PlaylistDto getUserLikedSongs(Long userId) {
        List<Playlist> allPlaylists = playlistRepository.findAll();
        Playlist userLikedSongs = new Playlist();
        for (Playlist playlist : allPlaylists) {
            if (playlist.getUser() != null
                    && Objects.equals(playlist.getUser().getId(), userId)
                    && Objects.equals(playlist.getName(), "Liked songs")) {
                userLikedSongs = playlist;
            }
        }
        return playlistConverter.toDto(userLikedSongs);
    }

    @Override
    public PlaylistDto addSongToPlaylist(Long playlistId, Long songId) {
        List<SongDto> songDtos = this.getSongsFromPlaylists(playlistId);
        Song newSong = songRepository.findById(songId).orElse(null);
        songDtos.add(songConverter.toDto(newSong));

        Playlist playlist = new Playlist();
        playlist.setSongs(songConverter.toEntity(songDtos));

        playlistRepository.updatePlaylistById(playlist);

        return playlistConverter.toDto(playlist);
    }

    @Override
    public PlaylistDto deleteSongFromPlaylist(Long playlistId, Long songId) {
        List<SongDto> songDtos = this.getSongsFromPlaylists(playlistId);
        for (SongDto songDto : songDtos) {
            if (Objects.equals(songDto.getId(), songId)) {
                songDtos.remove(songDto);
                break;
            }
        }
        Playlist playlist = new Playlist();
        playlist.setSongs(songConverter.toEntity(songDtos));

        playlistRepository.updatePlaylistById(playlist);

        return playlistConverter.toDto(playlist);
    }
}
