import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/modals/ProductModal";
import { flexCenter } from "../styles/globalStyle";
import ProductModal from "../components/modals/ProductModal";



const Products = () => {
  const { getFirms } = useStockCalls();
  const { products} = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  
  
  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
      Products
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          setInfo({});
          setOpen(true);
        }}
      >
        New Firm
      </Button>

      <ProductModalModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {firms?.length > 0 && (
        <Grid container sx={flexCenter} mt={3}>
          {products?.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
