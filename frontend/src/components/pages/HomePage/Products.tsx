import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

interface IProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
}

interface IProductsProps {
  products: IProductProps[];
}

export const Products: React.FC<IProductsProps> = (props) => {
  const [catagory, setCatagory] = React.useState('');
  const [catagories, setCatagories] = React.useState<string[]>([]);

  React.useEffect(() => {
    const catagories = new Set(props.products.map(product => product.category));
    setCatagories(['All', ...Array.from(catagories)]);
    setCatagory('All');
  }, [props.products]);

  const handleChange = (event: SelectChangeEvent) => {
    setCatagory(event.target.value as string);
  };

  const handleAddProductToShoppingCart = async (productId: string) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    };
    await fetch('http://localhost:5000/shopping-cart', requestOptions);
  }

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Catagory</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={catagory}
              label="Catagory"
              onChange={handleChange}
            >
              {catagories.map(catagory => {
                return <MenuItem key={catagory} value={catagory}>{catagory}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
        
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={4}>
          {props.products.filter(product => product.category === catagory || catagory === 'All').map((product) => (
            <Grid key={product.id} item>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }} color="text.secondary" gutterBottom>          
                        <span>{product.name}</span>
                        
                        <span>${product.price}</span>
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" onClick={()=> handleAddProductToShoppingCart(product.id)}>Add to shoppping cart</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}