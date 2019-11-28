export interface IHomeOrder {
  id: number;
  tenant: number;
  checkin: string;
  checkout: string;
  numberGuest: string;
  cost: number;
  orderDate: string;
  status: string;
}
