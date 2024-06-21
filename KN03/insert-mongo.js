const cd1Id = new ObjectId();
const cd2Id = new ObjectId();
const cd3Id = new ObjectId();

db.cds.insertMany([
  {
    _id: cd1Id,
    title: "Greatest Hits",
    price: 15.99,
    description: "A collection of the greatest hits."
  },
  {
    _id: cd2Id,
    title: "Live in Concert",
    price: 12.99,
    description: "Live recordings from the 2021 world tour."
  },
  {
    _id: cd3Id,
    title: "New Album",
    price: 9.99,
    description: "The latest album with brand new tracks."
  }
]);

const ticket1Id = new ObjectId();
const ticket2Id = new ObjectId();
const ticket3Id = new ObjectId();

const invoice1Id = new ObjectId();
const invoice2Id = new ObjectId();
const invoice3Id = new ObjectId();

db.concertTickets.insertMany([
  {
    _id: ticket1Id,
    purchaseDate: new Date("2023-05-20"),
    isDelivered: true,
    cds: [cd1Id, cd2Id],
    Invoice: {
      _id: invoice1Id,
      refNumber: 101,
      netPrice: 45.99,
      dueDate: new Date("2023-06-20")
    }
  },
  {
    _id: ticket2Id,
    purchaseDate: new Date("2023-06-15"),
    isDelivered: false,
    cds: [cd3Id],
    Invoice: {
      _id: invoice2Id,
      refNumber: 102,
      netPrice: 19.99,
      dueDate: new Date("2023-07-15")
    }
  },
  {
    _id: ticket3Id,
    purchaseDate: new Date("2023-07-10"),
    isDelivered: true,
    cds: [],
    Invoice: {
      _id: invoice3Id,
      refNumber: 103,
      netPrice: 29.99,
      dueDate: new Date("2023-08-10")
    }
  }
]);

const fan1Id = new ObjectId();
const fan2Id = new ObjectId();
const fan3Id = new ObjectId();

db.fans.insertOne({
  _id: fan1Id,
  email: "fan1@example.com",
  password: "securepassword123",
  orders: [ticket1Id, ticket2Id]
});

db.fans.insertMany([
  {
    _id: fan2Id,
    email: "fan2@example.com",
    password: "anotherpassword456",
    orders: [ticket3Id]
  },
  {
    _id: fan3Id,
    email: "fan3@example.com",
    password: "yetanotherpassword789",
    orders: []
  }
]);

