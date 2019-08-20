export class CryptocurrencyEntity {
  constructor(
    public id: number,
    public name: string,
    public symbol: string,
    public price: number,
    public change_1h: number,
    public change_24h: number,
    public change_7d: number,
    public marketCap: number
  ) {}
}
