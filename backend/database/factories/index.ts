import Factory from '@ioc:Adonis/Lucid/Factory'
import Battery from 'App/Models/Battery'

export const BatteryFactory = Factory
  .define(Battery, ({ faker }) => {
    return {
      name: faker.commerce.productName(),
      capacity: faker.random.number(50000),
      manufacturer: faker.company.companyName(),
      charging_cycles: 1
    }
  })
  .build()
