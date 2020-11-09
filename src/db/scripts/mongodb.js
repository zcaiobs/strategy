// docker exec -it 1feaa1b1262c mongo -u zcaiobs -p 1234 --authenticationDatabase herois
// db.herois.insert({
//     nome: 'Flash',
//     poder: 'Velocidade',
//     dataNascimento: '1996-05-04'
// })

// for(let i = 0; i <= 10000; i++) {
//     db.herois.insert({
//         nome: `Clone-${i}`,
//         poder: 'Velocidade',
//         dataNascimento: '1996-05-04'
//     })
// }

// db.herois.count()

// db.herois.findOne()

// db.herois.find().limit(10).sort({nome: 1})

// db.herois.find({}, {nome: 1, _id: 0})

// create
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1996-05-04'
    })

// read
    db.herois.find()

// update
    db.herois.update({poder: 'Velocidade'},{ $set: {poder: 'Super Força'} })

// delete
    db.herois.remove({}) // all
    db.herois.remove({poder: 'Super Força'})



