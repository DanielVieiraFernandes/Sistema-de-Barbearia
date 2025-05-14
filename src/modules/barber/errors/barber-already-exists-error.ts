export class BarberAlreadyExists extends Error {
  constructor() {
    super('Barber already exists');
  }
}
