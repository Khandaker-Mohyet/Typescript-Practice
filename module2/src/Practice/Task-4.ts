interface Book {
  name: string;
  writer: string;
  pageNumbers: number;
  price: number;
  inStock: true;
}
interface Magazine {
  name: string;
  writer: string;
  pageNumbers: number;
  price: number ;
  inStock: true;
}

type UnionType = Book | Magazine;
type IntersectionType = Book & Magazine;

