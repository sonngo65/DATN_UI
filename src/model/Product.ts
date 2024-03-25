export default interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  compate_price: number;
  note: string;
  endow: string;
  sticker?: string | null | undefined;
}
