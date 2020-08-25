import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Batteries extends BaseSchema {
  protected tableName = 'batteries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('capacity')
      table.string('manufacturer')
      table.integer('charging_cycles').defaultTo(1)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
