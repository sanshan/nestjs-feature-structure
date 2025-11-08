export class Price {
  private constructor(public readonly amount: number) {
    if (!Number.isInteger(amount) || amount < 0) {
      throw new Error('Price must be a non-negative integer (cents)');
    }
  }

  static of(amount: number) {
    return new Price(amount);
  }
}
