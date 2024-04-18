type a = { name: string };
type ChildOption = {
  id?: string;
  name: string;
};

type Option = {
  title: string;
  childOptions: ChildOption[];
};
type OptionDetail = {
  option1: string;
  option2: string;
  image: string;
  status: number;
  price: number;
  originPrice: number;
  quantity: number;
};

type Product = {
  name: string;
  content: string;
  summary: string;
  price: number;
  originPrice: number;
  options: Option[];
  optionDetails: OptionDetail[];
};
type GetProductResponse = {
  data: Product[];
  status: number;
};
type createProductRequest = Product & {
  categoryId?: string;
  vendorId?: string;
};
