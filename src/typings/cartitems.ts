import { CartContext } from 'pages/cart/context/CartContext';
import { UserType } from './user';

export type LineItem = {
  currency: string;
  orderId: number;
  id: string;
  preTaxAmount: number;
  price: number;
  quantity: number;
  variantId: number;
};

export type Order = {
  currency: string;
  email: string;
  id: string;
  itemCount: number;
  itemTotal: number;
  lineItems: LineItem[];
  total: number;
  userId: UserType;
};

export type AddressType = {
  streetAddress?: string;
  zipCode?: string;
  phone?: string;
  additionalInfo?: string;
  lastAddressId?: string;
  city?: string;
};
export type CardType = {
  cvv: string;
  name: string;
  expiry: string;
  number: string;
  cardId: string;
};
export type CartFormValues = {
  address: AddressType;
  card: CardType;
  billing: AddressType;
  deliveryDate: string;
  chipId: string;
  paymentFormState: boolean;
  driverTip: string;
};

export type AddressFormType = {
  shipAddress: Partial<CartContext['shipAddress']>;
  billAddress: Partial<CartContext['billAddress']>;
};
