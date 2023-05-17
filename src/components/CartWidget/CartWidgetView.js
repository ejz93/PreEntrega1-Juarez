import React from 'react';
import {Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidgetView = ({color}) => {
  return (
    <IconButton
      size='large'
      aria-label='show shopping'
      color={color}
      sx={{pt: 1, pb: 0}}
    >
      <Badge badgeContent={1} color='info'>
        <ShoppingCartIcon sx={{pb: 0}} />
      </Badge>
    </IconButton>
  );
};

export default CartWidgetView;