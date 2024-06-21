db.fans.updateOne({_id: ObjectId('66703e50fdacc5a060d6a96b')}, {$set: {password: '12345678'}})
db.concertTickets.updateMany({$or: [{isDelivered: true}, {invoice: { netPrice: {$gt: 20} }}]}, {$set: {isDelivered: false}})
db.cds.replaceOne({title: 'Greatest Hits'}, {
    title: 'Greatest Hits ever in 2023',
    price: 249.5,
    description: 'A collection of the greatest hits in 2023'
})