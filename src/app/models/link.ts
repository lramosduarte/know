export class Link {
  url: string;
  name?: string;
  dateRead?: Date;
  dateAdd: Date;
  favorite: boolean;

  constructor(
      url: string,
      dateAdd: Date = new Date(),
      favorite: boolean = false,
      name: string = null,
      dateRead: Date = null,
    ) {
    this.url = url;
    this.dateAdd = dateAdd;
    this.favorite = favorite;
    this.name = name;
    this.dateRead = dateRead;
  }

}
