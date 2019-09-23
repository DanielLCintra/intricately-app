import BaseModel from '../support/BaseModel'

export default class Company extends BaseModel {
  constructor() {
    super()

    this.name = ''
    this.spend = null
    this.spendAbilityMin = null
    this.spendAbilityMax = null
    this.notes = []
  }

  static Build(attributes) {
    const instance = new Company()
    instance.fillAttributes(attributes)

    return instance
  }
}
