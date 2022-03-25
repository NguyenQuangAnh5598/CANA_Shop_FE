export class Order{
  id?: number;
  userId?: number;
  statusId?: number;
  note?: string;


  constructor(id?: number, userId?: number, statusId?: number, note?: string) {
    this.id = id;
    this.userId = userId;
    this.statusId = statusId;
    this.note = note;
  }
}
