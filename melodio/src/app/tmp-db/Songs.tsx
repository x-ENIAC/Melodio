import { Song } from "../../authorized-zone/liked-songs/song/Song";

let testSongs : Song[] = [
   {
      id: 0,
      name: "Exists",
      author: "Foals",
      duration: "5:57",
   },
   {
      id: 1,
      name: "Lonely Hunter",
      author: "Foals",
      duration: "4:37",
   },
   {
      id: 2,
      name: "Numb",
      author: "Linkin Park",
      duration: "3:07",
   },
   {
      id: 3,
      name: "Think",
      author: "Kaleida",
      duration: "3:58",
   },
   {
      id: 4,
      name: "Spies",
      author: "kosheen",
      duration: "3:39",
   },
   {
      id: 5,
      name: "Woke Up This Morning",
      author: "Alabama 3",
      duration: "4:10",
   },
   {
      id: 6,
      name: "All Star",
      author: "Smash Mouth",
      duration: "3:21",
   },
   {
      id: 7,
      name: "Never gonna give you up",
      author: "Rick Astley",
      duration: "3:32",
   },
   {
      id: 8,
      name: "Narayan",
      author: "The Prodigy",
      duration: "6:33",
   },
   {
      id: 9,
      name: "Riders on the Storm",
      author: "The Doors",
      duration: "7:14",
   },
   {
      id: 10,
      name: "Fools Gold",
      author: "The Stone Roses",
      duration: "3:55",
   }
];

export default function getTestSongs() {
   return testSongs;
}