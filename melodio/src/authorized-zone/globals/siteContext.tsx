import { GetPlaylists, PlaylistClass } from './../playlists/Playlists'
import { Song } from '../liked-songs/song/Song';
import React from 'react';

// export default class SiteContent extends React.Component {
//     state = {
//         nowPlayingSong: null,
//         usedId: "",
//         playlistsList: []
//     }

//     getNowPlayingSong() {
//         if (this.state.nowPlayingSong == null) {
//             this.setState({
//                 getNowPlayingSong: new Song(0, "Neger Gonna")
//             })
//         }
//     }
    // playlists: Array<Playlist> = new Array();
    // songs: Array<Song> = new Array();

    // initPlaylists() {
    //     if (this.playlists == undefined)
    //         this.playlists = new Array();
    //     console.log("lol")
    //     const playlistsList = [
    //         new Playlist(0, "Playlist 0", "Popular songs", "popular"),
    //         new Playlist(1, "Playlist 1", "New songs", "new"),
    //         new Playlist(10, "User Playlist 1", "User playlist description", "user_playlist"),
    //         new Playlist(11, "User Playlist 2", "User playlist description", "user_playlist"),
    //         new Playlist(12, "User Playlist 3", "User playlist description", "user_playlist"),
    //     ]

    //     this.addPlaylists(playlistsList);
    // }
  
    // addPlaylists(newPlaylists: Array<Playlist>) {
    //   for (var i = 0; i < newPlaylists.length; i++) {
    //     if (!this.playlists.includes(newPlaylists[i])) {
    //         this.playlists.push(newPlaylists[i]);
    //         console.log(this.playlists.length);
    //     }
    //   }
    // }

    // getPlaylists() {
    //     console.log("getPlaylists");
    //     return this.playlists;
    // }

    // initSongs() {
    //     console.log("initSongs");
    //     const songsList = [
    //         new Song(1, "Exists", "Foals", true, "5:57", false),
    //         new Song(2, "Lonely Hunter", "Foals", true, "4:37", false),
    //         new Song(3, "Numb", "Linkin Park", true, "3:07", false),
    //         new Song(4, "Think", "Kaleida", true, "3:58", false),
    //         new Song(5, "Spies", "Kosheen", true, "3:39", false),
    //     ]

    //     this.addSongs(songsList);
    // }

    // addSongs(newSongs: Array<Song>) {
    //     for (var i = 0; i < newSongs.length; i++) {
    //       if (!this.songs.includes(newSongs[i])) {
    //           this.songs.push(newSongs[i]);
    //           console.log(this.songs.length);
    //       }
    //     }
    // }

    // getSongs() {
    //     return this.songs;
    // }

// };

// var siteContent = new SiteContent();
// siteContent.initPlaylists();
// siteContent.initSongs();

// export { siteContent };