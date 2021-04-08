export class Ticket {

  public id: number;
  public user: string;
  public description: string;
  public creationDate: string;
  public status: string;

  constructor(user: string, description: string, status: string, id?: number, creationDate?: string) {
    this.id = id;
    this.user = user;
    this.description = description;
    this.creationDate = creationDate;
    this.status = status;
  }

}
