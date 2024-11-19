const express = require('express');
const { resolve } = require('path');

const app = express();
const { sequelize } = require('./lib/index');
const { book } = require('./models/book.model');

let booksData = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American Dream',
    genre: 'Classic Fiction',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description:
      'A story of racial injustice and loss of innocence in the American South',
    genre: 'Southern Gothic',
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian social science fiction novel',
    genre: 'Dystopian Fiction',
  },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    await book.bulkCreate(booksData);

    return res.status(200).json({ message: 'Database seeding successfull' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error seeding the data', error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
