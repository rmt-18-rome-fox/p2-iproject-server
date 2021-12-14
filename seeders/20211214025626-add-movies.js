"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Movies", [
      {
        title: "Spider-Man: No Way Home",
        genre: "Action, Adventure, Sci-Fi",
        actors: "Zendaya, Benedict Cumberbatch, Tom Holland",
        plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMDUzNWJhZWQtYzU3Zi00M2NjLThjZjEtMTRmMjRmNzBmMWI2XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt10872600",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nightmare Alley",
        genre: "Action, Crime, Drama",
        actors: "Bradley Cooper, Cate Blanchett, Willem Dafoe",
        plot: "An ambitious carny with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWNmM2UzZGEtZTM1MC00N2Q1LTgwOTYtMzU0YjgwNWI2Y2E3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt7740496",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Lost Daughter",
        genre: "Drama",
        actors: "Olivia Colman, Dakota Johnson, Peter Sarsgaard",
        plot: "A woman's beach vacation takes a dark turn when she begins to confront the troubles of her past.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZTJmYTJmYTktMzU1Yy00ZTZlLTgzNjItYmY4ZDFjZGFjYjZhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt9100054",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Novice",
        genre: "Thriller",
        actors: "Isabelle Fuhrman, Amy Forsyth, Dilone",
        plot: "A college freshman joins her university's rowing team and undertakes an obsessive physical and psychological journey to make it to the top varsity boat, no matter the cost.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNWNhMTg0MzAtNmNkNC00NjU2LTgwYTAtMTllNTQ1MDU5NjNjXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt11131464",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Matrix Resurrections",
        genre: "Action, Sci-Fi",
        actors: "Keanu Reeves, Christina Ricci, Carrie-Anne Moss",
        plot: "The plot is currently unknown.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt10838180",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The King's Man",
        genre: "Action, Adventure, Comedy",
        actors: "Ralph Fiennes, Harris Dickinson, Gemma Arterton",
        plot: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTRmZmQ3YjQtY2E1Ny00YjQ0LTg4YjYtZWEwYzExNTRhZjE3XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt6856242",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Tragedy of Macbeth",
        genre: "Drama, History, Thriller",
        actors: "Denzel Washington, Frances McDormand, Alex Hassell",
        plot: "A Scottish lord becomes convinced by a trio of witches that he will become the next King of Scotland, and his ambitious wife supports him in his plans of seizing power.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYjhlYTAwNWEtYWNkNC00MjdjLTk3NDktNzQyYWNmYjA2OGEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt10095582",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sing 2",
        genre: "Animation, Adventure, Comedy",
        actors: "Matthew McConaughey, Taron Egerton, Tori Kelly",
        plot: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt6467266",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "A Journal for Jordan",
        genre: "Drama",
        actors: "Michael B. Jordan, Robert Wisdom, Tamara Tunie",
        plot: "1st Sgt. Charles Monroe King, before he is killed in action in Baghdad, authors a journal for his son intended to tell him how to live a decent life despite growing up without a father.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjVjNmUyZGItMDRlZi00ZTMwLTllM2UtNzFlZDZhMWMxOTUyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt0995854",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "American Underdog",
        genre: "Biography, Drama, Sport",
        actors: "Zachary Levi, Anna Paquin, Dennis Quaid",
        plot: "The story of NFL MVP and Hall of Fame quarterback, Kurt Warner, who went from stocking shelves at a supermarket to becoming an American Football star.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNWE4ODBjNDItYTE1MC00ODg1LTg5MzUtZDRkY2ZiZjQyYTgzXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
        imdbUrl: "imdb.com/title/tt11729298",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies");
  },
};
