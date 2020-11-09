const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = { nome: 'Gaviao Negro', poder: 'Flexas' }
const MOCK_HEROI_ATUALIZAR = { nome: 'Mulher Gavião', poder: 'Grito' }

const context = new Context(new Postgres())
describe('PostgreSQL Strategy', function() {
  this.timeout(Infinity)
  this.beforeAll(async () => {
    await context.connect()
    await context.delete()
    await context.create(MOCK_HEROI_CADASTRAR)
  })

  it('PostgresSQL connection', async () => {
    const result = await context.isConnected()
    assert.deepStrictEqual(result, true)
  })

  it('listar', async () => {
    const [result] = await context.read(MOCK_HEROI_CADASTRAR)
    delete result.id
    assert.deepStrictEqual(result, MOCK_HEROI_CADASTRAR)
  });

  it('atualizar', async () => {
    const [result] = await context.read({nome: MOCK_HEROI_CADASTRAR.nome})
    const novoItem = {
      ...MOCK_HEROI_ATUALIZAR,
      nome: 'Mulher Maravilha',
    }
    const [update] = await context.update(result.id, novoItem)
    const [itemAtualizado] = await context.read({id: result.id})

    assert.deepStrictEqual(update, 1)
    assert.deepStrictEqual(itemAtualizado.nome, novoItem.nome)
  })

  it('remover', async () => {
    const [item] = await context.read({})
    const result = await context.delete(item.id)
    assert.deepStrictEqual(result, 1)
  })
})
