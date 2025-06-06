import spacing from 'tokens/spacing';

export const CheckoutItemOuter = {
  width: '100%',
  height: '144px',
  border: '2px solid gray',
  marginBottom: `${spacing.big}`
};

export const CheckoutItemImage = {
  float: 'left',
  width: '33%',
  boxSizing: 'border-box'
};

export const CheckoutItemContents = {
  width: '67%',
  padding: `${spacing.big}`,
  float: 'right',
  boxSizing: 'border-box'
};

export const CheckoutItemMinus = {
  width: '40px',
  cursor: 'pointer',
  float: 'left'
};

export const CheckoutItemPlus = {
  width: '40px',
  cursor: 'pointer',
  float: 'right'
};

export const Ellipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
