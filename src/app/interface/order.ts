export interface Order {
  id: string;
  house_id: number;
  tenant_id: number;
  checkin: string;
  checkout: string;
  numberGuest: number;
  cost: number;
  orderDate: number;
}
