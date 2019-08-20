export class CryptocurrencyDetails {
  constructor(
    public description: string,
    public logo: string,
    public name: string,
    public symbol: string,
    public website: string[],
    public reddit: string[],
    public twitter: string[]
  ) {}
}
