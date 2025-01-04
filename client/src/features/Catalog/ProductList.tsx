import { Box } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCart from "./ProductCart";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {products.map((item) => (
        <ProductCart key={item.id} product={item} />
      ))}
    </Box>
  );
}
