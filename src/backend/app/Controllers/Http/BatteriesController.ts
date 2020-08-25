import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { BatteryFactory } from 'Database/factories'

import Battery from 'App/Models/Battery'

export default class BatteriesController {
  public async index (ctx: HttpContextContract) {
    // const batteries = await BatteryFactory.createMany(10)
    const batteries = await Battery.all()

    return batteries
  }

  public async create (ctx: HttpContextContract) {
    console.log(ctx)
  }

  public async store (ctx: HttpContextContract) {
    console.log(ctx)
  }

  public async show (ctx: HttpContextContract) {
    return await Battery.findOrFail(ctx.params.id)
  }

  public async edit (ctx: HttpContextContract) {
    console.log(ctx)
  }

  public async update (ctx: HttpContextContract) {
    console.log(ctx)
  }

  public async destroy (ctx: HttpContextContract) {
    console.log(ctx)
  }
}
