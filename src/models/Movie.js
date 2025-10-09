let movies = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    genre: "Science Fiction",
    director: "Lena Martinez",
    year: 2024,
    imageUrl:
      "https://m.media-amazon.com/images/I/61Wb2sa60hL._UF1000,1000_QL80_.jpg",
    rating: 8.4,
    description:
      "In a near-future society, a brilliant quantum physicist races to stop a time anomaly that threatens to erase human history.",
  },
  {
    id: 2,
    title: "Shadows in the Pines",
    genre: "Thriller",
    director: "Marcus Delaney",
    year: 2023,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1469357697i/12977563.jpg",
    rating: 7.9,
    description:
      "A retired detective is drawn back into a decades-old cold case when strange occurrences surface in a quiet mountain town.",
  },
  {
    id: 3,
    title: "Beneath Crimson Skies",
    genre: "Historical Drama",
    director: "Anika Chowdhury",
    year: 2025,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE0NjQzMjkzNV5BMl5BanBnXkFtZTgwMjcxMjU0MjE@._V1_.jpg",
    rating: 9.1,
    description:
      "Set during WWII, the story follows a young resistance fighter torn between duty and love in occupied France.",
  },
  {
    id: 4,
    title: "Neon Reverie",
    genre: "Cyberpunk",
    director: "Takashi Morimoto",
    year: 2025,
    imageUrl:
      "https://i.ytimg.com/vi/iuFRtt5AQZg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmGCbxOh8DLw0BrHaA5icJ-vqVkQ",
    rating: 8.7,
    description:
      "In a dystopian mega-city, a rogue AI forms an unlikely bond with a street artist, igniting a rebellion against a corrupt technocracy.",
  },
  {
    id: 5,
    title: "The Last Ember",
    genre: "Fantasy Adventure",
    director: "Clara Jensen",
    year: 2022,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZ_2pEnyh78N6-H9B_flox_QUTmfhPw822g&s",
    rating: 8.2,
    description:
      "A young orphan discovers she's the key to awakening ancient elemental guardians who can save her crumbling kingdom from eternal darkness.",
  },
];

export default class Movie {
  static find() {
    return movies.slice();
  }
}
