import { PlaylistClass } from "../../authorized-zone/playlists/Playlists";

/*
user_id == -1 => this playlist FOR ALL USERS
*/

let testPlaylists : PlaylistClass[] = [
   {
    id: 0,
    name: "Popular songs",
    description: "It is popular nowadays",
    label: "system_playlist",
    songs_list: [
        1,
        5,
        6,
        7,
        8
    ],
    user_id: -1
   },
   {
    id: 1,
    name: "New songs",
    description: "It is new songs",
    label: "system_playlist",
    songs_list: null,
    user_id: -1
   },
   {
    id: 10,
    name: "Liked songs",
    description: "My liked",
    label: "liked_playlist",
    songs_list: [
        3,
        5
    ],
    user_id: 1
   },
   {
    id: 11,
    name: "Super puper rock",
    description: "User playlist 1",
    label: "user_playlist",
    songs_list: null,
    user_id: 1
   }
];

export default function getTestPlaylists() {
    return testPlaylists;
}