/*
 * Run the following command in docker shell to initialise the database:
 * mongo coachbro scripts/init.mongo.js
 */

/*
 * Reset database to clean slate
 */ 
db.TrainingDB.remove({});
db.MemberDB.remove({});
db.PaymentDB.remove({});

/*
 * initial trainings to be inserted into db
 */
const initialTrainings = [
  {
    id: 1,
    trainer: 'Alan Ang',
    difficulty: 1,
    title: 'Yoga Basics',
    type: 'Yoga',
    venue: '85 Bedok North #01-00',
    vacancy: 20,
    date: new Date('2023-05-29'),
    cost: 9.90,
    description: 'Introduction to basic yoga poses',
    photoURL: 'https://cdn.pixabay.com/photo/2018/10/25/15/41/yoga-3772674_1280.jpg',
  },
  {
    id: 2,
    trainer: 'Janice Tan',
    difficulty: 2,
    title: 'Tennis Basics',
    type: 'Tennis',
    venue: '10 Kent Ridge Road #02-00',
    vacancy: 10,
    date: new Date('2023-06-15'),
    cost: 4.50,
    description: 'Introduction to tennis serving and rally techniques',
    photoURL: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]

/*
 * initial transactions to be inserted into db
 */
const initialTransactions = [
  {
    id: 1,
    userId: "MAO002",
    trainerId: "MAT001",
    trainingId: 1,
    dateReceived: new Date('2023-05-28'),
    cost: 9.90,
    type: 'Yoga',
  },
  {
    id: 2,
    userId: "MAO002",
    trainerId: "MAT002",
    trainingId: 2,
    dateReceived: new Date('2023-06-14'),
    cost: 4.50,
    type: 'Tennis',
  },
  // {
  //   id: 3,
  //   userId: "MAT001",
  //   trainingId: 1,
  //   dateReceived: new Date('2023-06-14'),
  // },
  // {
  //   id: 4,
  //   userId: "MAT002",
  //   trainingId: 2,
  //   dateReceived: new Date('2023-06-14'),
  // },
]

/*
 * initial members to be inserted into db
 */
const initialMembers = [
  {
    id: "MAT001",
    firstName: "Alan",
    lastName: "Ang",
    accountType: "Trainer",
    email: "alanang@gmail.com",
    gender: "M",
    contactNo: 88884444,
    username: "alanang",
    password: "alanang",
  },
  {
    id: "MAT002",
    firstName: "Janice",
    lastName: "Tan",
    accountType: "Trainer",
    email: "janicetan@gmail.com",
    gender: "F",
    contactNo: 88885555,
    username: "janicetan",
    password: "janicetan",
  },
  {
    id: "MAO001",
    firstName: "Yen Ther",
    lastName: "Goh",
    accountType: "Ordinary",
    email: "yenther@gmail.com",
    gender: "M",
    contactNo: 88886666,
    username: "yenther",
    password: "yenther",
  },
  {
    id: "MAO002",
    firstName: "Simon",
    lastName: "Lim",
    accountType: "Ordinary",
    email: "simon@gmail.com",
    gender: "M",
    contactNo: 88887777,
    username: "simon",
    password: "simon",
  },
  {
    id: "MAO003",
    firstName: "Xian Fang",
    lastName: "Wang",
    accountType: "Ordinary",
    email: "xianfang@gmail.com",
    gender: "F",
    contactNo: 88888888,
    username: "xianfang",
    password: "xianfang",
  },
]

db.TrainingDB.insertMany(initialTrainings);
db.MemberDB.insertMany(initialMembers);
db.PaymentDB.insertMany(initialTransactions);


const countTrainings = db.TrainingDB.count();
const countMembers = db.MemberDB.count();
const countTransactions = db.PaymentDB.count();
print('Inserted', countTrainings, 'Trainings');
print('Inserted', countMembers, 'Members');
print('Inserted', countTransactions, 'Transactions');


// The _id below is just a placeholder. The below collection, in fact, has only one row and one column.
// We can denote this by any name but we call this fixedindex.
db.counters.remove({ _id: 'fixedindex' });
db.counters.insert({ _id: 'fixedindex', current: countTrainings, MAO: 3, MAT:2});