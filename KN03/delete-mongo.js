db.fans.deleteOne({"_id": ObjectId("66703a0dfdacc5a060d6a961")})
db.concertTickets.deleteMany({"isDelivered": true})
db.cds.deleteMany({ $or: [ { _id: ObjectId("66703a0dfdacc5a060d6a957") }, { _id: ObjectId("66703a0dfdacc5a060d6a958") } ] })

