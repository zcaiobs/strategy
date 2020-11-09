const ICrud = require('./interface/interfaceCrud')

class MongoDB extends ICrud {
    constructor(strategy) {
        super()
    }

    create(item) {
        console.log('O item foi salvo em MongoDB')
    }
}

module.exports = MongoDB