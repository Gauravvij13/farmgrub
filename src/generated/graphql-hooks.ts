import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
  JSON: any;
  ISO8601Date: any;
  DeliveryDate: any;
};

export type AddAddressInput = {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zipcode: Scalars['String'];
  phone: Scalars['String'];
  countryId: Scalars['Int'];
  stateId: Scalars['Int'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCartInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  productId: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCategoryInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  taxonId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddCharitableContributionToCartInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  charitableContributionId: Scalars['Int'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddDriverTipInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  driverTip: DriverTipAttributes;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPromoCodeInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  promoCode: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  alternativePhone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type AddressAttributes = {
  id?: Maybe<Scalars['ID']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type AddStoreCreditInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Adjustable = LineItem | Order | Shipment;

export type AdjustableInterface = {
  additionalTaxTotal: Scalars['Float'];
  adjustmentTotal: Scalars['Float'];
  charitableContributionTotal: Scalars['Float'];
  includedTaxTotal: Scalars['Float'];
  nonTaxableAdjustmentTotal: Scalars['Float'];
  preTaxAmount: Scalars['Float'];
  promoTotal: Scalars['Float'];
  taxableAdjustmentTotal: Scalars['Float'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustable: Adjustable;
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  eligible: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  included: Scalars['Boolean'];
  label: Scalars['String'];
  mandatory: Scalars['Boolean'];
  order: Order;
  source?: Maybe<AdjustmentSource>;
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type AdjustmentSource = CharitableContribution | DriverTip | PromotionAction | TaxRate;

export type AdUnit = {
  __typename?: 'AdUnit';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image: Asset;
  newWindow: Scalars['Boolean'];
  targetUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type AdvanceInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Asset = {
  __typename?: 'Asset';
  altText?: Maybe<Scalars['String']>;
  custom?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  medium?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AssetCustomArgs = {
  maxWidth: Scalars['Int'];
  maxHeight: Scalars['Int'];
};

export type AvailableZipcodeInput = {
  zipCode: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AvailableZipcodePayload = {
  __typename?: 'AvailableZipcodePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  successMessage?: Maybe<Scalars['String']>;
};

export type Calculator = {
  __typename?: 'Calculator';
  calculableId?: Maybe<Scalars['ID']>;
  calculableType?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  deliveryFee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  preferences?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangePasswordPayload = {
  __typename?: 'ChangePasswordPayload';
  changed?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CharitableContribution = {
  __typename?: 'CharitableContribution';
  charity: Charity;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  donation: CharitableContributionDonation;
  fullDescription?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export enum CharitableContributionDonation {
  RoundUp = 'round_up',
}

export type CharitableContributions = {
  charitableContribution: CharitableContribution;
  charitableContributions: Array<CharitableContribution>;
};

export type CharitableContributionsCharitableContributionArgs = {
  id: Scalars['ID'];
};

export type Charity = {
  __typename?: 'Charity';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Asset>;
  missionStatement: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type Checkout = {
  paymentMethods: Array<PaymentMethod>;
  shippingRates: Array<Shipment>;
};

export type CompleteInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ContactUsInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ContactUsPayload = {
  __typename?: 'ContactUsPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  successMessage?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  id?: Maybe<Scalars['ID']>;
  iso?: Maybe<Scalars['String']>;
  iso3?: Maybe<Scalars['String']>;
  isoName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numcode?: Maybe<Scalars['Int']>;
  states?: Maybe<Array<State>>;
  statesRequired?: Maybe<Scalars['Boolean']>;
  zipcodeRequired?: Maybe<Scalars['Boolean']>;
};

export type CreateLoyaltyCardInput = {
  supplierId: Scalars['Int'];
  cardNumber: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateStockNotificationInput = {
  productId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  zipCode: Scalars['String'];
  password: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  address?: Maybe<Address>;
  ccType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  default: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  gatewayCustomerProfileId?: Maybe<Scalars['String']>;
  gatewayPaymentProfileId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastDigits?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  payments: Array<Payment>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  user?: Maybe<User>;
  year?: Maybe<Scalars['String']>;
};

export type Delivery = {
  __typename?: 'Delivery';
  date?: Maybe<Scalars['ISO8601Date']>;
  deliverySlots?: Maybe<Array<DeliverySlot>>;
  displayTitle?: Maybe<Scalars['String']>;
};

export type DeliveryAttributes = {
  date: Scalars['String'];
  slotId: Scalars['ID'];
};

export type DeliverySlot = {
  __typename?: 'DeliverySlot';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  displayActualTime?: Maybe<Scalars['String']>;
  displayTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  shippingMethod?: Maybe<ShipmentMethod>;
  startTime?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type DestroyLoyaltyCardInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DestroyStockNotificationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DriverTip = {
  __typename?: 'DriverTip';
  adminLabel?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  tipStyle?: Maybe<DriverTipStyle>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type DriverTipAttributes = {
  id: Scalars['ID'];
  customAmount?: Maybe<Scalars['Float']>;
};

export type DriverTips = {
  driverTip: DriverTip;
  driverTips: Array<DriverTip>;
};

export type DriverTipsDriverTipArgs = {
  id: Scalars['ID'];
};

export enum DriverTipStyle {
  Custom = 'custom',
  Percent = 'percent',
}

export type ForgotPasswordInput = {
  email: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  successMessage?: Maybe<Scalars['String']>;
};

export type FutureContactInput = {
  email: Scalars['String'];
  zipCode: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type FutureContactPayload = {
  __typename?: 'FutureContactPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  successMessage?: Maybe<Scalars['String']>;
};

export type InventoryUnit = {
  __typename?: 'InventoryUnit';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  lineItem?: Maybe<LineItem>;
  order?: Maybe<Order>;
  pending: Scalars['Boolean'];
  quantity: Scalars['Int'];
  shipment?: Maybe<Shipment>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  variant?: Maybe<Variant>;
};

export type LineItem = AdjustableInterface & {
  __typename?: 'LineItem';
  additionalTaxTotal: Scalars['Float'];
  adjustmentTotal: Scalars['Float'];
  adjustments: Array<Adjustment>;
  charitableContributionTotal: Scalars['Float'];
  costPrice?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  includedTaxTotal: Scalars['Float'];
  inventoryUnits: Array<InventoryUnit>;
  nonTaxableAdjustmentTotal: Scalars['Float'];
  order?: Maybe<Order>;
  preTaxAmount: Scalars['Float'];
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  promoTotal: Scalars['Float'];
  quantity?: Maybe<Scalars['Int']>;
  taxCategory?: Maybe<TaxCategory>;
  taxableAdjustmentTotal: Scalars['Float'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  variant?: Maybe<Variant>;
};

export type LoyaltyCard = {
  __typename?: 'LoyaltyCard';
  cardNumber: Scalars['String'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  supplier: Supplier;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress?: Maybe<Address>;
  addCart?: Maybe<Order>;
  addCategoryToCart?: Maybe<Order>;
  addCharitableContributionToCart?: Maybe<Order>;
  addLoyaltyCard?: Maybe<LoyaltyCard>;
  addPromoCode?: Maybe<Order>;
  availableZipcode?: Maybe<AvailableZipcodePayload>;
  changePassword?: Maybe<ChangePasswordPayload>;
  checkoutAddDriverTip?: Maybe<Order>;
  checkoutAddStoreCredit?: Maybe<Order>;
  checkoutAdvance?: Maybe<Order>;
  checkoutComplete?: Maybe<Order>;
  checkoutNext?: Maybe<Order>;
  checkoutRemoveStoreCredit?: Maybe<Order>;
  checkoutUpdate?: Maybe<Order>;
  contactUs?: Maybe<ContactUsPayload>;
  createStockNotification?: Maybe<StockNotification>;
  createUser?: Maybe<User>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  futureContact?: Maybe<FutureContactPayload>;
  removeCharitableContributionFromCart?: Maybe<Order>;
  removeLoyaltyCard?: Maybe<Scalars['Boolean']>;
  removePromoCode?: Maybe<Order>;
  removeStockNotification?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>;
  signIn?: Maybe<SignInPayload>;
  updateAddress?: Maybe<Address>;
  updateLoyaltyCard?: Maybe<LoyaltyCard>;
  updateProductToCart?: Maybe<Order>;
  updateUser?: Maybe<User>;
  verifyEmail?: Maybe<VerifyEmailPayload>;
};

export type MutationAddAddressArgs = {
  input: AddAddressInput;
};

export type MutationAddCartArgs = {
  input: AddCartInput;
};

export type MutationAddCategoryToCartArgs = {
  input: AddCategoryInput;
};

export type MutationAddCharitableContributionToCartArgs = {
  input: AddCharitableContributionToCartInput;
};

export type MutationAddLoyaltyCardArgs = {
  input: CreateLoyaltyCardInput;
};

export type MutationAddPromoCodeArgs = {
  input: AddPromoCodeInput;
};

export type MutationAvailableZipcodeArgs = {
  input: AvailableZipcodeInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCheckoutAddDriverTipArgs = {
  input: AddDriverTipInput;
};

export type MutationCheckoutAddStoreCreditArgs = {
  input: AddStoreCreditInput;
};

export type MutationCheckoutAdvanceArgs = {
  input: AdvanceInput;
};

export type MutationCheckoutCompleteArgs = {
  input: CompleteInput;
};

export type MutationCheckoutNextArgs = {
  input: NextInput;
};

export type MutationCheckoutRemoveStoreCreditArgs = {
  input: RemoveStoreCreditInput;
};

export type MutationCheckoutUpdateArgs = {
  input: UpdateInput;
};

export type MutationContactUsArgs = {
  input: ContactUsInput;
};

export type MutationCreateStockNotificationArgs = {
  input: CreateStockNotificationInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

export type MutationFutureContactArgs = {
  input: FutureContactInput;
};

export type MutationRemoveCharitableContributionFromCartArgs = {
  input: RemoveCharitableContributionFromCartInput;
};

export type MutationRemoveLoyaltyCardArgs = {
  input: DestroyLoyaltyCardInput;
};

export type MutationRemovePromoCodeArgs = {
  input: RemovePromoCodeInput;
};

export type MutationRemoveStockNotificationArgs = {
  input: DestroyStockNotificationInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};

export type MutationUpdateLoyaltyCardArgs = {
  input: UpdateLoyaltyCardInput;
};

export type MutationUpdateProductToCartArgs = {
  input: UpdateProductToCartInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type NextInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Option = {
  __typename?: 'Option';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  optionValues?: Maybe<Array<OptionValue>>;
  presentation?: Maybe<Scalars['String']>;
};

export type OptionValue = {
  __typename?: 'OptionValue';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  presentation?: Maybe<Scalars['String']>;
};

export type Order = AdjustableInterface & {
  __typename?: 'Order';
  additionalTaxTotal: Scalars['Float'];
  adjustmentTotal: Scalars['Float'];
  adjustments?: Maybe<Array<Adjustment>>;
  allAdjustments?: Maybe<Array<Adjustment>>;
  approvedAt?: Maybe<Scalars['ISO8601DateTime']>;
  approver?: Maybe<User>;
  billAddress?: Maybe<Address>;
  canceledAt?: Maybe<Scalars['ISO8601DateTime']>;
  canceler?: Maybe<User>;
  channel: Scalars['String'];
  charitableContributionTotal: Scalars['Float'];
  charitableContributionsTotal?: Maybe<Scalars['Float']>;
  completedAt?: Maybe<Scalars['ISO8601DateTime']>;
  confirmationDelivered: Scalars['Boolean'];
  consideredRisky: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdBy: User;
  currency?: Maybe<Scalars['String']>;
  driverTipTotal?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  includedTaxTotal: Scalars['Float'];
  insufficientStockLines?: Maybe<Array<LineItem>>;
  inventoryUnits?: Maybe<Array<InventoryUnit>>;
  itemCount?: Maybe<Scalars['Int']>;
  itemTotal: Scalars['Float'];
  lastIpAddress?: Maybe<Scalars['String']>;
  lineItemAdjustments?: Maybe<Array<Adjustment>>;
  lineItems?: Maybe<Array<LineItem>>;
  merchandiseTotal?: Maybe<Scalars['Float']>;
  nonTaxableAdjustmentTotal: Scalars['Float'];
  number?: Maybe<Scalars['String']>;
  paymentState: ShipmentState;
  paymentTotal: Scalars['Float'];
  payments?: Maybe<Array<Payment>>;
  preTaxAmount: Scalars['Float'];
  products?: Maybe<Array<Product>>;
  promoCode?: Maybe<Scalars['String']>;
  promoTotal: Scalars['Float'];
  salesTax?: Maybe<Scalars['Float']>;
  shipAddress?: Maybe<Address>;
  shipmentAdjustments?: Maybe<Array<Adjustment>>;
  shipmentState: ShipmentState;
  shipmentTotal: Scalars['Float'];
  shipments?: Maybe<Array<Shipment>>;
  shipping?: Maybe<Scalars['Float']>;
  specialInstructions?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateLockVersion: Scalars['Int'];
  store: Store;
  taxableAdjustmentTotal: Scalars['Float'];
  token?: Maybe<Scalars['String']>;
  total: Scalars['Float'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  user?: Maybe<User>;
  variants?: Maybe<Array<Variant>>;
};

export type Orders = {
  cart?: Maybe<Order>;
  order: Order;
  orderList: Array<Order>;
};

export type OrdersOrderArgs = {
  id: Scalars['ID'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  avsResponse?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  cvvResponseCode?: Maybe<Scalars['String']>;
  cvvResponseMessage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['String']>;
  offsets: Array<Payment>;
  order: Order;
  paymentMethod: PaymentMethod;
  responseCode?: Maybe<Scalars['String']>;
  source?: Maybe<PaymentSource>;
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type PaymentAttributes = {
  stripeToken?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['ID']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  active: Scalars['Boolean'];
  autoCapture: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  creditCards: Array<CreditCard>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  payments: Array<Payment>;
  position: Scalars['Int'];
  preferences?: Maybe<Scalars['String']>;
  store: Store;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type PaymentSource = CreditCard | Order | PaymentMethod;

export type Product = {
  __typename?: 'Product';
  amount?: Maybe<Scalars['String']>;
  availableOn?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  currency?: Maybe<Scalars['String']>;
  defaultVariant?: Maybe<Variant>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  discontinueOn?: Maybe<Scalars['ISO8601DateTime']>;
  displayAmount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Asset>>;
  inStock?: Maybe<Scalars['Boolean']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  optionTypes?: Maybe<Array<Option>>;
  possiblePromotions?: Maybe<Array<Promotion>>;
  productProperties?: Maybe<Array<ProductProperty>>;
  similarProducts?: Maybe<Array<Product>>;
  stockItems?: Maybe<Array<StockItem>>;
  suppliers?: Maybe<Array<Supplier>>;
  totalOnHand?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  variants?: Maybe<Array<Variant>>;
};

export type ProductProperty = {
  __typename?: 'ProductProperty';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  property?: Maybe<Property>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type Products = {
  product: Product;
  productSearch?: Maybe<Array<Product>>;
  products: Array<Product>;
  similarProducts: Array<Product>;
};

export type ProductsProductArgs = {
  id: Scalars['ID'];
};

export type ProductsProductSearchArgs = {
  query: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ProductsProductsArgs = {
  similar?: Maybe<Scalars['ID']>;
};

export type ProductsSimilarProductsArgs = {
  productId: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  promotionActions?: Maybe<Array<PromotionAction>>;
  promotionCategory?: Maybe<PromotionCategory>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type PromotionAction = {
  __typename?: 'PromotionAction';
  calculator?: Maybe<Calculator>;
  id?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Promotion>;
};

export type PromotionCategory = {
  __typename?: 'PromotionCategory';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type Property = {
  __typename?: 'Property';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  presentation?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type Query = CharitableContributions &
  Checkout &
  DriverTips &
  Orders &
  Products &
  QuickDeliveries &
  Suppliers &
  Taxonomies &
  Users &
  Zipcodes & {
    __typename?: 'Query';
    activeQuickDelivery: QuickDelivery;
    /** @deprecated Please use me.ship_address */
    address: Address;
    availableZipcode?: Maybe<Zipcode>;
    cart?: Maybe<Order>;
    categories: Array<Taxon>;
    category: Taxon;
    charitableContribution: CharitableContribution;
    charitableContributions: Array<CharitableContribution>;
    countries: Array<Country>;
    driverTip: DriverTip;
    driverTips: Array<DriverTip>;
    listQuickDeliveries: Array<QuickDelivery>;
    me?: Maybe<User>;
    order: Order;
    orderList: Array<Order>;
    paymentMethods: Array<PaymentMethod>;
    product: Product;
    productSearch?: Maybe<Array<Product>>;
    products: Array<Product>;
    rootCategory: Taxon;
    shipmentMethod: Array<ShipmentMethod>;
    shippingRates: Array<Shipment>;
    similarProducts: Array<Product>;
    states: Array<State>;
    store: Store;
    supplier: Supplier;
    suppliers?: Maybe<Array<Supplier>>;
    taxon: Taxon;
    taxonomies: Array<Taxonomy>;
    taxonomy: Taxonomy;
    taxons: Array<Taxon>;
    user?: Maybe<User>;
  };

export type QueryAvailableZipcodeArgs = {
  zipCode: Scalars['String'];
};

export type QueryCategoriesArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type QueryCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryCharitableContributionArgs = {
  id: Scalars['ID'];
};

export type QueryDriverTipArgs = {
  id: Scalars['ID'];
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductSearchArgs = {
  query: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryProductsArgs = {
  similar?: Maybe<Scalars['ID']>;
};

export type QuerySimilarProductsArgs = {
  productId: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySupplierArgs = {
  id: Scalars['ID'];
};

export type QueryTaxonArgs = {
  id: Scalars['ID'];
};

export type QueryTaxonomyArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QuickDeliveries = {
  activeQuickDelivery: QuickDelivery;
  listQuickDeliveries: Array<QuickDelivery>;
};

export type QuickDelivery = {
  __typename?: 'QuickDelivery';
  contactInfo: Scalars['String'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  details: Scalars['String'];
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  phone: Scalars['String'];
  shippingMethod: ShipmentMethod;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type RemoveCharitableContributionFromCartInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  charitableContributionId: Scalars['Int'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemovePromoCodeInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  promoCode: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveStoreCreditInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type SendVerificationEmailInput = {
  email: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SendVerificationEmailPayload = {
  __typename?: 'SendVerificationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  successMessage?: Maybe<Scalars['String']>;
};

export type Shipment = AdjustableInterface & {
  __typename?: 'Shipment';
  additionalTaxTotal: Scalars['Float'];
  address?: Maybe<Address>;
  adjustmentTotal: Scalars['Float'];
  charitableContributionTotal: Scalars['Float'];
  cost: Scalars['Float'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deliverySlot?: Maybe<DeliverySlot>;
  id?: Maybe<Scalars['ID']>;
  includedTaxTotal: Scalars['Float'];
  nonTaxableAdjustmentTotal: Scalars['Float'];
  number?: Maybe<Scalars['String']>;
  order: Order;
  preTaxAmount: Scalars['Float'];
  promoTotal: Scalars['Float'];
  requestedDeliveryDate?: Maybe<Scalars['DeliveryDate']>;
  shippedAt?: Maybe<Scalars['ISO8601DateTime']>;
  shippingRates?: Maybe<Array<ShippingRate>>;
  state: Scalars['String'];
  stockLocation: StockLocation;
  taxableAdjustmentTotal: Scalars['Float'];
  tracking?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type ShipmentMethod = {
  __typename?: 'ShipmentMethod';
  adminName?: Maybe<Scalars['String']>;
  calculator?: Maybe<Calculator>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  deliverySlots?: Maybe<Array<DeliverySlot>>;
  deliveryToday?: Maybe<Delivery>;
  deliveryTomorrow?: Maybe<Delivery>;
  displayOn?: Maybe<Scalars['String']>;
  firstAvailableDelivery?: Maybe<Delivery>;
  id?: Maybe<Scalars['ID']>;
  interrimHolidays?: Maybe<Array<Scalars['String']>>;
  isDeliverySlotsEnabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nextAvailableDelivery?: Maybe<Delivery>;
  taxCategoryId?: Maybe<Scalars['ID']>;
  trackingUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export enum ShipmentState {
  Backorder = 'backorder',
  Canceled = 'canceled',
  Partial = 'partial',
  Pending = 'pending',
  Ready = 'ready',
  Shipped = 'shipped',
}

export type ShippingRate = {
  __typename?: 'ShippingRate';
  basePrice?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  displayPrice?: Maybe<Scalars['String']>;
  finalPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  selected?: Maybe<Scalars['Boolean']>;
  shipment?: Maybe<Shipment>;
  shippingMethod?: Maybe<ShipmentMethod>;
  taxAmount?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<TaxRate>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SignInPayload = {
  __typename?: 'SignInPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type State = {
  __typename?: 'State';
  abbr?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type StockItem = {
  __typename?: 'StockItem';
  backorderable: Scalars['Boolean'];
  countOnHand: Scalars['Int'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  stockLocation: StockLocation;
  stockMovements: Array<StockMovement>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  variant: Variant;
};

export type StockLocation = {
  __typename?: 'StockLocation';
  active: Scalars['Boolean'];
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  adminName?: Maybe<Scalars['String']>;
  backorderableDefault: Scalars['Boolean'];
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  default: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  propagateAllVariants: Scalars['Boolean'];
  shipments: Array<Shipment>;
  state?: Maybe<State>;
  stateName?: Maybe<Scalars['String']>;
  stockItems: Array<StockItem>;
  stockMovements: Array<StockMovement>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type StockMovement = {
  __typename?: 'StockMovement';
  action?: Maybe<Scalars['String']>;
  backorderable: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  quantity: Scalars['Int'];
  stockItem: StockItem;
  stockMovements: Array<StockMovement>;
  supplier?: Maybe<Supplier>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type StockNotification = {
  __typename?: 'StockNotification';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isPending?: Maybe<Scalars['Boolean']>;
  sentAt?: Maybe<Scalars['ISO8601DateTime']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  user?: Maybe<User>;
  variant?: Maybe<Variant>;
};

export type Store = {
  __typename?: 'Store';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  instagram?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  termsOfService?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  categories?: Maybe<Array<Taxon>>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Asset>>;
  instagram?: Maybe<Scalars['String']>;
  logo?: Maybe<Asset>;
  masterSupplier?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Product>>;
  state?: Maybe<State>;
  supportsLoyaltyCards: Scalars['Boolean'];
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  websiteName?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type Suppliers = {
  supplier: Supplier;
  suppliers?: Maybe<Array<Supplier>>;
};

export type SuppliersSupplierArgs = {
  id: Scalars['ID'];
};

export type TaxCategory = {
  __typename?: 'TaxCategory';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isDefault: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  taxCode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type Taxon = {
  __typename?: 'Taxon';
  addProductsAllowed?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Array<Taxon>>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  descendants?: Maybe<Array<Taxon>>;
  description?: Maybe<Scalars['String']>;
  hasChildren: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  products: Array<Product>;
  promotionals: Array<AdUnit>;
  taxonomy?: Maybe<Taxonomy>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type TaxonProductsArgs = {
  includeDescendants?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Taxonomies = {
  categories: Array<Taxon>;
  category: Taxon;
  rootCategory: Taxon;
  taxon: Taxon;
  taxonomies: Array<Taxonomy>;
  taxonomy: Taxonomy;
  taxons: Array<Taxon>;
};

export type TaxonomiesCategoriesArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type TaxonomiesCategoryArgs = {
  id: Scalars['ID'];
};

export type TaxonomiesTaxonArgs = {
  id: Scalars['ID'];
};

export type TaxonomiesTaxonomyArgs = {
  id: Scalars['ID'];
};

export type Taxonomy = {
  __typename?: 'Taxonomy';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Product>>;
  taxons?: Maybe<Array<Taxon>>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type UpdateAddressInput = {
  shippingAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  shippingCity?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  billAddress?: Maybe<AddressAttributes>;
  shipAddress?: Maybe<AddressAttributes>;
  specialInstructions?: Maybe<Scalars['String']>;
  delivery?: Maybe<DeliveryAttributes>;
  payment?: Maybe<PaymentAttributes>;
  driverTip?: Maybe<DriverTipAttributes>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateLoyaltyCardInput = {
  id: Scalars['ID'];
  cardNumber: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductToCartInput = {
  mailchimpCampaignId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNo?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  addressOne?: Maybe<Scalars['String']>;
  addressTwo?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Address>>;
  billAddress?: Maybe<Address>;
  cartSaved?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  creditCards?: Maybe<Array<CreditCard>>;
  currentSignInAt?: Maybe<Scalars['ISO8601DateTime']>;
  currentSignInIp?: Maybe<Scalars['String']>;
  defaultCreditCard?: Maybe<CreditCard>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  lastSignInAt?: Maybe<Scalars['ISO8601DateTime']>;
  lastSignInIp?: Maybe<Scalars['String']>;
  loyaltyCards?: Maybe<Array<LoyaltyCard>>;
  orders?: Maybe<Array<Order>>;
  paymentSources?: Maybe<Array<CreditCard>>;
  pendingStockNotifications?: Maybe<Array<StockNotification>>;
  phoneNo?: Maybe<Scalars['String']>;
  shipAddress?: Maybe<Address>;
  signInCount?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Users = {
  me?: Maybe<User>;
  user?: Maybe<User>;
};

export type UsersUserArgs = {
  id: Scalars['ID'];
};

export type Variant = {
  __typename?: 'Variant';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  currency?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['ISO8601DateTime']>;
  displayAmount?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  optionValues?: Maybe<Array<OptionValue>>;
  product?: Maybe<Product>;
  purchasable?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type VerifyEmailInput = {
  token?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VerifyEmailPayload = {
  __typename?: 'VerifyEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user: User;
};

export type Zipcode = {
  __typename?: 'Zipcode';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Zipcodes = {
  availableZipcode?: Maybe<Zipcode>;
};

export type ZipcodesAvailableZipcodeArgs = {
  zipCode: Scalars['String'];
};

export type SuppliersQueryVariables = {};

export type SuppliersQuery = { __typename?: 'Query' } & {
  suppliers?: Maybe<
    Array<
      { __typename?: 'Supplier' } & Pick<
        Supplier,
        | 'id'
        | 'city'
        | 'description'
        | 'websiteName'
        | 'websiteUrl'
        | 'masterSupplier'
        | 'supportsLoyaltyCards'
        | 'name'
      > & {
          state?: Maybe<{ __typename?: 'State' } & Pick<State, 'id' | 'abbr'>>;
          images?: Maybe<
            Array<{ __typename?: 'Asset' } & Pick<Asset, 'id' | 'url' | 'altText' | 'title'>>
          >;
          categories?: Maybe<Array<{ __typename?: 'Taxon' } & Pick<Taxon, 'id' | 'name'>>>;
        }
    >
  >;
};

export type SupplierQueryVariables = {
  id: Scalars['ID'];
};

export type SupplierQuery = { __typename?: 'Query' } & {
  supplier: { __typename?: 'Supplier' } & Pick<
    Supplier,
    'id' | 'city' | 'description' | 'websiteName' | 'websiteUrl' | 'supportsLoyaltyCards' | 'name'
  > & {
      logo?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url' | 'altText' | 'title'>>;
      state?: Maybe<{ __typename?: 'State' } & Pick<State, 'id' | 'abbr'>>;
      images?: Maybe<
        Array<{ __typename?: 'Asset' } & Pick<Asset, 'id' | 'url' | 'altText' | 'title'>>
      >;
      products?: Maybe<Array<{ __typename?: 'Product' } & Pick<Product, 'id' | 'name'>>>;
    };
};

export type AddProductToCartMutationVariables = {
  input: AddCartInput;
};

export type AddProductToCartMutation = { __typename?: 'Mutation' } & {
  addCart?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'currency'
      | 'itemCount'
      | 'itemTotal'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'shipmentTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & {
              source?: Maybe<
                | ({ __typename: 'CharitableContribution' } & Pick<
                    CharitableContribution,
                    'id' | 'donation'
                  >)
                | { __typename?: 'DriverTip' }
                | { __typename?: 'PromotionAction' }
                | { __typename?: 'TaxRate' }
              >;
            }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type AddCategoryToCartMutationVariables = {
  input: AddCategoryInput;
};

export type AddCategoryToCartMutation = { __typename?: 'Mutation' } & {
  addCategoryToCart?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'currency'
      | 'itemCount'
      | 'itemTotal'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'shipmentTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & {
              source?: Maybe<
                | ({ __typename: 'CharitableContribution' } & Pick<
                    CharitableContribution,
                    'id' | 'donation'
                  >)
                | { __typename?: 'DriverTip' }
                | { __typename?: 'PromotionAction' }
                | { __typename?: 'TaxRate' }
              >;
            }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type UpdateProductInsideCartMutationVariables = {
  input: UpdateProductToCartInput;
};

export type UpdateProductInsideCartMutation = { __typename?: 'Mutation' } & {
  updateProductToCart?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'currency'
      | 'itemCount'
      | 'itemTotal'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'shipmentTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
                adjustments: Array<
                  { __typename?: 'Adjustment' } & Pick<
                    Adjustment,
                    'amount' | 'id' | 'eligible' | 'label'
                  > & {
                      source?: Maybe<
                        | { __typename?: 'CharitableContribution' }
                        | { __typename?: 'DriverTip' }
                        | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                              promotion?: Maybe<
                                { __typename?: 'Promotion' } & Pick<Promotion, 'id' | 'name'>
                              >;
                            })
                        | { __typename?: 'TaxRate' }
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type AddCharitableContributionToCartMutationVariables = {
  input: AddCharitableContributionToCartInput;
};

export type AddCharitableContributionToCartMutation = { __typename?: 'Mutation' } & {
  addCharitableContributionToCart?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'itemCount'
      | 'itemTotal'
      | 'currency'
      | 'total'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'charitableContributionTotal'
      | 'shipping'
    > & {
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type RemoveCharitableContributionFromCartMutationVariables = {
  input: RemoveCharitableContributionFromCartInput;
};

export type RemoveCharitableContributionFromCartMutation = { __typename?: 'Mutation' } & {
  removeCharitableContributionFromCart?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'itemCount'
      | 'itemTotal'
      | 'currency'
      | 'total'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'charitableContributionTotal'
      | 'shipping'
    > & {
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type UpdatePlaceOrderMutationVariables = {
  input: UpdateInput;
};

export type UpdatePlaceOrderMutation = { __typename?: 'Mutation' } & {
  checkoutUpdate?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'shipmentTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type NextPlaceOrderMutationVariables = {
  input: NextInput;
};

export type NextPlaceOrderMutation = { __typename?: 'Mutation' } & {
  checkoutNext?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'shipmentTotal'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type CompletePlaceOrderMutationVariables = {
  input: CompleteInput;
};

export type CompletePlaceOrderMutation = { __typename?: 'Mutation' } & {
  checkoutComplete?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'salesTax'
    >
  >;
};

export type AddDriverTipMutationVariables = {
  input: AddDriverTipInput;
};

export type AddDriverTipMutation = { __typename?: 'Mutation' } & {
  checkoutAddDriverTip?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'salesTax'
    >
  >;
};

export type AddPromoCodeMutationVariables = {
  input: AddPromoCodeInput;
};

export type AddPromoCodeMutation = { __typename?: 'Mutation' } & {
  addPromoCode?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'shipmentTotal'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type RemovePromoCodeMutationVariables = {
  input: RemovePromoCodeInput;
};

export type RemovePromoCodeMutation = { __typename?: 'Mutation' } & {
  removePromoCode?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'shipping'
      | 'createdAt'
      | 'specialInstructions'
      | 'number'
      | 'shipmentTotal'
      | 'driverTipTotal'
      | 'charitableContributionTotal'
      | 'salesTax'
    > & {
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
          >
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type CartCountQueryVariables = {};

export type CartCountQuery = { __typename?: 'Query' } & {
  cart?: Maybe<{ __typename?: 'Order' } & Pick<Order, 'id' | 'itemCount' | 'itemTotal' | 'total'>>;
};

export type CartViewQueryVariables = {};

export type CartViewQuery = { __typename?: 'Query' } & {
  cart?: Maybe<
    { __typename?: 'Order' } & Pick<
      Order,
      | 'id'
      | 'itemCount'
      | 'itemTotal'
      | 'currency'
      | 'total'
      | 'state'
      | 'merchandiseTotal'
      | 'preTaxAmount'
      | 'charitableContributionTotal'
      | 'shipping'
      | 'createdAt'
      | 'salesTax'
      | 'shipmentTotal'
      | 'specialInstructions'
      | 'driverTipTotal'
    > & {
        insufficientStockLines?: Maybe<
          Array<
            { __typename: 'LineItem' } & Pick<LineItem, 'quantity'> & {
                product?: Maybe<
                  { __typename: 'Product' } & Pick<Product, 'id' | 'name' | 'totalOnHand'>
                >;
              }
          >
        >;
        shipmentAdjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | { __typename: 'CharitableContribution' }
                  | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                  | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename: 'TaxRate' }
                >;
              }
          >
        >;
        adjustments?: Maybe<
          Array<
            { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
                source?: Maybe<
                  | ({ __typename: 'CharitableContribution' } & Pick<
                      CharitableContribution,
                      'id' | 'donation'
                    >)
                  | { __typename?: 'DriverTip' }
                  | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                        promotion?: Maybe<
                          { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                        >;
                      })
                  | { __typename?: 'TaxRate' }
                >;
              }
          >
        >;
        payments?: Maybe<
          Array<
            { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
                source?: Maybe<
                  | ({ __typename?: 'CreditCard' } & Pick<
                      CreditCard,
                      'id' | 'lastDigits' | 'ccType'
                    >)
                  | { __typename?: 'Order' }
                  | { __typename?: 'PaymentMethod' }
                >;
              }
          >
        >;
        shipments?: Maybe<
          Array<
            { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
                deliverySlot?: Maybe<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
                >;
              }
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<Address, 'address1' | 'phone' | 'city' | 'zipcode'>
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<Address, 'address1' | 'phone' | 'city' | 'zipcode'>
        >;
        lineItems?: Maybe<
          Array<
            { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
                product?: Maybe<
                  { __typename?: 'Product' } & Pick<
                    Product,
                    'id' | 'name' | 'totalOnHand' | 'amount' | 'currency' | 'displayAmount'
                  > & {
                      productProperties?: Maybe<
                        Array<
                          { __typename?: 'ProductProperty' } & Pick<
                            ProductProperty,
                            'id' | 'value'
                          > & {
                              property?: Maybe<
                                { __typename?: 'Property' } & Pick<Property, 'id' | 'name'>
                              >;
                            }
                        >
                      >;
                      images?: Maybe<
                        Array<
                          { __typename?: 'Asset' } & Pick<
                            Asset,
                            'id' | 'thumbnail' | 'altText' | 'title'
                          >
                        >
                      >;
                    }
                >;
                adjustments: Array<
                  { __typename?: 'Adjustment' } & Pick<
                    Adjustment,
                    'amount' | 'id' | 'eligible' | 'label'
                  > & {
                      source?: Maybe<
                        | { __typename?: 'CharitableContribution' }
                        | { __typename?: 'DriverTip' }
                        | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                              promotion?: Maybe<
                                { __typename?: 'Promotion' } & Pick<Promotion, 'id' | 'name'>
                              >;
                            })
                        | { __typename?: 'TaxRate' }
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type DeliverySlotsQueryVariables = {};

export type DeliverySlotsQuery = { __typename?: 'Query' } & {
  shipmentMethod: Array<
    { __typename?: 'ShipmentMethod' } & Pick<ShipmentMethod, 'id' | 'name' | 'interrimHolidays'> & {
        deliveryToday?: Maybe<
          { __typename?: 'Delivery' } & Pick<Delivery, 'date' | 'displayTitle'> & {
              deliverySlots?: Maybe<
                Array<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'displayTime' | 'id'> & {
                      shippingMethod?: Maybe<
                        { __typename?: 'ShipmentMethod' } & {
                          calculator?: Maybe<
                            { __typename?: 'Calculator' } & Pick<
                              Calculator,
                              'deliveryFee' | 'preferences'
                            >
                          >;
                        }
                      >;
                    }
                >
              >;
            }
        >;
        deliveryTomorrow?: Maybe<
          { __typename?: 'Delivery' } & Pick<Delivery, 'date' | 'displayTitle'> & {
              deliverySlots?: Maybe<
                Array<
                  { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'displayTime' | 'id'> & {
                      shippingMethod?: Maybe<
                        { __typename?: 'ShipmentMethod' } & {
                          calculator?: Maybe<
                            { __typename?: 'Calculator' } & Pick<
                              Calculator,
                              'deliveryFee' | 'preferences'
                            >
                          >;
                        }
                      >;
                    }
                >
              >;
            }
        >;
        calculator?: Maybe<{ __typename?: 'Calculator' } & Pick<Calculator, 'deliveryFee'>>;
      }
  >;
};

export type CharitableContributionsQueryVariables = {};

export type CharitableContributionsQuery = { __typename?: 'Query' } & {
  charitableContributions: Array<
    { __typename?: 'CharitableContribution' } & Pick<
      CharitableContribution,
      'id' | 'description' | 'fullDescription'
    > & {
        charity: { __typename?: 'Charity' } & Pick<Charity, 'id' | 'name'> & {
            logo?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'thumbnail' | 'title' | 'altText'>>;
          };
      }
  >;
};

export type OrderListQueryVariables = {};

export type OrderListQuery = { __typename?: 'Query' } & {
  orderList: Array<
    { __typename?: 'Order' } & Pick<
      Order,
      'id' | 'total' | 'state' | 'createdAt' | 'completedAt' | 'number'
    > & {
        shipments?: Maybe<
          Array<{ __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'>>
        >;
      }
  >;
};

export type OrderQueryVariables = {
  id: Scalars['ID'];
};

export type OrderQuery = { __typename?: 'Query' } & {
  order: { __typename?: 'Order' } & Pick<
    Order,
    | 'id'
    | 'total'
    | 'state'
    | 'merchandiseTotal'
    | 'preTaxAmount'
    | 'shipping'
    | 'createdAt'
    | 'specialInstructions'
    | 'number'
    | 'driverTipTotal'
    | 'charitableContributionTotal'
    | 'salesTax'
  > & {
      shipmentAdjustments?: Maybe<
        Array<
          { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
              source?: Maybe<
                | { __typename: 'CharitableContribution' }
                | ({ __typename: 'DriverTip' } & Pick<DriverTip, 'tipStyle' | 'id' | 'amount'>)
                | ({ __typename: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                      promotion?: Maybe<
                        { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                      >;
                    })
                | { __typename: 'TaxRate' }
              >;
            }
        >
      >;
      adjustments?: Maybe<
        Array<
          { __typename?: 'Adjustment' } & Pick<Adjustment, 'amount' | 'id' | 'eligible'> & {
              source?: Maybe<
                | ({ __typename: 'CharitableContribution' } & Pick<
                    CharitableContribution,
                    'id' | 'donation'
                  >)
                | { __typename?: 'DriverTip' }
                | ({ __typename?: 'PromotionAction' } & Pick<PromotionAction, 'id'> & {
                      promotion?: Maybe<
                        { __typename?: 'Promotion' } & Pick<Promotion, 'name' | 'code' | 'id'>
                      >;
                    })
                | { __typename?: 'TaxRate' }
              >;
            }
        >
      >;
      payments?: Maybe<
        Array<
          { __typename?: 'Payment' } & Pick<Payment, 'id' | 'state'> & {
              source?: Maybe<
                | ({ __typename?: 'CreditCard' } & Pick<CreditCard, 'id' | 'lastDigits' | 'ccType'>)
                | { __typename?: 'Order' }
                | { __typename?: 'PaymentMethod' }
              >;
            }
        >
      >;
      shipments?: Maybe<
        Array<
          { __typename?: 'Shipment' } & Pick<Shipment, 'requestedDeliveryDate'> & {
              deliverySlot?: Maybe<
                { __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayTime'>
              >;
            }
        >
      >;
      shipAddress?: Maybe<
        { __typename?: 'Address' } & Pick<
          Address,
          'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
        >
      >;
      billAddress?: Maybe<
        { __typename?: 'Address' } & Pick<
          Address,
          'address1' | 'address2' | 'phone' | 'city' | 'zipcode'
        >
      >;
      lineItems?: Maybe<
        Array<
          { __typename?: 'LineItem' } & Pick<LineItem, 'id' | 'price' | 'quantity'> & {
              product?: Maybe<
                { __typename?: 'Product' } & Pick<
                  Product,
                  'id' | 'name' | 'amount' | 'currency' | 'displayAmount'
                > & {
                    images?: Maybe<
                      Array<
                        { __typename?: 'Asset' } & Pick<
                          Asset,
                          'id' | 'thumbnail' | 'altText' | 'title'
                        >
                      >
                    >;
                  }
              >;
            }
        >
      >;
    };
};

export type ContactUsMutationVariables = {
  input: ContactUsInput;
};

export type ContactUsMutation = { __typename?: 'Mutation' } & {
  contactUs?: Maybe<{ __typename?: 'ContactUsPayload' } & Pick<ContactUsPayload, 'successMessage'>>;
};

export type DriverTipsQueryVariables = {};

export type DriverTipsQuery = { __typename?: 'Query' } & {
  driverTips: Array<
    { __typename?: 'DriverTip' } & Pick<DriverTip, 'id' | 'title' | 'tipStyle' | 'amount'>
  >;
};

export type AddLoyaltyCardMutationVariables = {
  input: CreateLoyaltyCardInput;
};

export type AddLoyaltyCardMutation = { __typename?: 'Mutation' } & {
  addLoyaltyCard?: Maybe<
    { __typename?: 'LoyaltyCard' } & Pick<LoyaltyCard, 'cardNumber' | 'id'> & {
        supplier: { __typename?: 'Supplier' } & Pick<Supplier, 'name'> & {
            logo?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'custom' | 'title' | 'altText'>>;
          };
        user: { __typename?: 'User' } & Pick<User, 'id'> & {
            loyaltyCards?: Maybe<
              Array<
                { __typename?: 'LoyaltyCard' } & Pick<LoyaltyCard, 'id' | 'cardNumber'> & {
                    supplier: { __typename?: 'Supplier' } & Pick<Supplier, 'id' | 'name'> & {
                        logo?: Maybe<
                          { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>
                        >;
                      };
                  }
              >
            >;
          };
      }
  >;
};

export type UpdateLoyaltyCardMutationVariables = {
  input: UpdateLoyaltyCardInput;
};

export type UpdateLoyaltyCardMutation = { __typename?: 'Mutation' } & {
  updateLoyaltyCard?: Maybe<
    { __typename?: 'LoyaltyCard' } & Pick<LoyaltyCard, 'cardNumber' | 'id'> & {
        supplier: { __typename?: 'Supplier' } & Pick<Supplier, 'id' | 'name'> & {
            logo?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>>;
          };
        user: { __typename?: 'User' } & Pick<User, 'id'> & {
            loyaltyCards?: Maybe<
              Array<
                { __typename?: 'LoyaltyCard' } & Pick<LoyaltyCard, 'id' | 'cardNumber'> & {
                    supplier: { __typename?: 'Supplier' } & Pick<Supplier, 'id' | 'name'> & {
                        logo?: Maybe<
                          { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>
                        >;
                      };
                  }
              >
            >;
          };
      }
  >;
};

export type RemoveLoyaltyCardMutationVariables = {
  input: DestroyLoyaltyCardInput;
};

export type RemoveLoyaltyCardMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'removeLoyaltyCard'
>;

export type CategoriesQueryVariables = {};

export type CategoriesQuery = { __typename?: 'Query' } & {
  categories: Array<
    { __typename?: 'Taxon' } & Pick<
      Taxon,
      'id' | 'name' | 'description' | 'hasChildren' | 'addProductsAllowed'
    > & {
        promotionals: Array<
          { __typename?: 'AdUnit' } & Pick<AdUnit, 'id' | 'targetUrl' | 'newWindow'> & {
              image: { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>;
            }
        >;
        products: Array<
          { __typename?: 'Product' } & Pick<
            Product,
            'id' | 'name' | 'amount' | 'isAvailable' | 'totalOnHand'
          > & {
              productProperties?: Maybe<
                Array<
                  { __typename?: 'ProductProperty' } & Pick<ProductProperty, 'id' | 'value'> & {
                      property?: Maybe<{ __typename?: 'Property' } & Pick<Property, 'name' | 'id'>>;
                    }
                >
              >;
              defaultVariant?: Maybe<
                { __typename?: 'Variant' } & Pick<Variant, 'id' | 'purchasable'>
              >;
              images?: Maybe<
                Array<
                  { __typename?: 'Asset' } & Pick<Asset, 'id' | 'thumbnail' | 'altText' | 'title'>
                >
              >;
            }
        >;
      }
  >;
};

export type SimilarProductsQueryVariables = {
  productId: Scalars['ID'];
};

export type SimilarProductsQuery = { __typename?: 'Query' } & {
  similarProducts: Array<
    { __typename?: 'Product' } & Pick<Product, 'id' | 'name' | 'amount' | 'isAvailable'> & {
        productProperties?: Maybe<
          Array<
            { __typename?: 'ProductProperty' } & Pick<ProductProperty, 'id' | 'value'> & {
                property?: Maybe<{ __typename?: 'Property' } & Pick<Property, 'name' | 'id'>>;
              }
          >
        >;
        defaultVariant?: Maybe<{ __typename?: 'Variant' } & Pick<Variant, 'id' | 'purchasable'>>;
        images?: Maybe<
          Array<{ __typename?: 'Asset' } & Pick<Asset, 'id' | 'thumbnail' | 'altText' | 'title'>>
        >;
      }
  >;
};

export type CategoryQueryVariables = {
  categoryId: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
};

export type CategoryQuery = { __typename?: 'Query' } & {
  category: { __typename?: 'Taxon' } & Pick<
    Taxon,
    | 'id'
    | 'name'
    | 'description'
    | 'permalink'
    | 'metaTitle'
    | 'metaDescription'
    | 'addProductsAllowed'
    | 'metaKeywords'
    | 'hasChildren'
  > & {
      promotionals: Array<
        { __typename?: 'AdUnit' } & Pick<AdUnit, 'id' | 'targetUrl' | 'newWindow'> & {
            image: { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>;
          }
      >;
      products: Array<
        { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'name' | 'amount' | 'isAvailable' | 'totalOnHand'
        > & {
            productProperties?: Maybe<
              Array<
                { __typename?: 'ProductProperty' } & Pick<ProductProperty, 'id' | 'value'> & {
                    property?: Maybe<{ __typename?: 'Property' } & Pick<Property, 'name' | 'id'>>;
                  }
              >
            >;
            defaultVariant?: Maybe<
              { __typename?: 'Variant' } & Pick<Variant, 'id' | 'purchasable'>
            >;
            images?: Maybe<
              Array<
                { __typename?: 'Asset' } & Pick<Asset, 'id' | 'thumbnail' | 'altText' | 'title'>
              >
            >;
          }
      >;
      descendants?: Maybe<
        Array<
          { __typename?: 'Taxon' } & Pick<Taxon, 'id' | 'name' | 'hasChildren'> & {
              promotionals: Array<
                { __typename?: 'AdUnit' } & Pick<AdUnit, 'id' | 'targetUrl' | 'newWindow'> & {
                    image: { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>;
                  }
              >;
              products: Array<
                { __typename?: 'Product' } & Pick<
                  Product,
                  'id' | 'name' | 'amount' | 'isAvailable'
                > & {
                    productProperties?: Maybe<
                      Array<
                        { __typename?: 'ProductProperty' } & Pick<
                          ProductProperty,
                          'id' | 'value'
                        > & {
                            property?: Maybe<
                              { __typename?: 'Property' } & Pick<Property, 'name' | 'id'>
                            >;
                          }
                      >
                    >;
                    defaultVariant?: Maybe<
                      { __typename?: 'Variant' } & Pick<Variant, 'id' | 'purchasable'>
                    >;
                    images?: Maybe<
                      Array<
                        { __typename?: 'Asset' } & Pick<
                          Asset,
                          'id' | 'thumbnail' | 'altText' | 'title'
                        >
                      >
                    >;
                  }
              >;
            }
        >
      >;
    };
};

export type RootCategoryQueryVariables = {};

export type RootCategoryQuery = { __typename?: 'Query' } & {
  rootCategory: { __typename?: 'Taxon' } & Pick<Taxon, 'description'> & {
      promotionals: Array<
        { __typename?: 'AdUnit' } & Pick<AdUnit, 'id' | 'targetUrl' | 'newWindow'> & {
            image: { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>;
          }
      >;
    };
};

export type ProductQueryVariables = {
  id: Scalars['ID'];
};

export type ProductQuery = { __typename?: 'Query' } & {
  product: { __typename?: 'Product' } & Pick<
    Product,
    | 'id'
    | 'name'
    | 'amount'
    | 'description'
    | 'metaTitle'
    | 'metaDescription'
    | 'metaKeywords'
    | 'isAvailable'
    | 'totalOnHand'
  > & {
      productProperties?: Maybe<
        Array<
          { __typename?: 'ProductProperty' } & Pick<ProductProperty, 'id' | 'value'> & {
              property?: Maybe<{ __typename?: 'Property' } & Pick<Property, 'name' | 'id'>>;
            }
        >
      >;
      defaultVariant?: Maybe<{ __typename?: 'Variant' } & Pick<Variant, 'id' | 'purchasable'>>;
      images?: Maybe<
        Array<{ __typename?: 'Asset' } & Pick<Asset, 'id' | 'url' | 'altText' | 'title'>>
      >;
      suppliers?: Maybe<
        Array<
          { __typename?: 'Supplier' } & Pick<Supplier, 'id' | 'name' | 'supportsLoyaltyCards'> & {
              logo?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>>;
            }
        >
      >;
    };
};

export type CreateStockNotificationMutationVariables = {
  input: CreateStockNotificationInput;
};

export type CreateStockNotificationMutation = { __typename?: 'Mutation' } & {
  createStockNotification?: Maybe<
    { __typename?: 'StockNotification' } & Pick<StockNotification, 'id'> & {
        variant?: Maybe<
          { __typename?: 'Variant' } & Pick<Variant, 'id'> & {
              product?: Maybe<{ __typename?: 'Product' } & Pick<Product, 'id'>>;
            }
        >;
      }
  >;
};

export type RemoveStockNotificationMutationVariables = {
  input: DestroyStockNotificationInput;
};

export type RemoveStockNotificationMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'removeStockNotification'
>;

export type ActiveQuickDeliveryQueryVariables = {};

export type ActiveQuickDeliveryQuery = { __typename?: 'Query' } & {
  activeQuickDelivery: { __typename?: 'QuickDelivery' } & Pick<
    QuickDelivery,
    'contactInfo' | 'details' | 'id' | 'phone' | 'email' | 'subtitle' | 'title'
  > & {
      shippingMethod: { __typename?: 'ShipmentMethod' } & {
        deliverySlots?: Maybe<
          Array<{ __typename?: 'DeliverySlot' } & Pick<DeliverySlot, 'id' | 'displayActualTime'>>
        >;
      };
    };
};

export type ProductSearchQueryVariables = {
  query: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ProductSearchQuery = { __typename?: 'Query' } & {
  productSearch?: Maybe<
    Array<
      { __typename?: 'Product' } & Pick<
        Product,
        'id' | 'name' | 'amount' | 'description' | 'isAvailable'
      > & {
          variants?: Maybe<
            Array<
              { __typename?: 'Variant' } & {
                optionValues?: Maybe<
                  Array<{ __typename?: 'OptionValue' } & Pick<OptionValue, 'presentation'>>
                >;
              }
            >
          >;
          defaultVariant?: Maybe<{ __typename?: 'Variant' } & Pick<Variant, 'id' | 'purchasable'>>;
          images?: Maybe<
            Array<{ __typename?: 'Asset' } & Pick<Asset, 'id' | 'thumbnail' | 'altText' | 'title'>>
          >;
        }
    >
  >;
};

export type StoreQueryVariables = {};

export type StoreQuery = { __typename?: 'Query' } & {
  store: { __typename?: 'Store' } & Pick<Store, 'name' | 'id' | 'phone' | 'facebook' | 'instagram'>;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
};

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'phoneNo'>
  >;
};

export type ChangePasswordMutationVariables = {
  input: ChangePasswordInput;
};

export type ChangePasswordMutation = { __typename?: 'Mutation' } & {
  changePassword?: Maybe<
    { __typename?: 'ChangePasswordPayload' } & Pick<ChangePasswordPayload, 'changed'>
  >;
};

export type UserDetailsQueryVariables = {};

export type UserDetailsQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'firstName' | 'lastName' | 'email' | 'phoneNo' | 'cartSaved'
    > & {
        addresses?: Maybe<
          Array<
            { __typename?: 'Address' } & Pick<
              Address,
              'address1' | 'city' | 'id' | 'phone' | 'zipcode'
            >
          >
        >;
        billAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'city' | 'id' | 'phone' | 'zipcode'
          >
        >;
        shipAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'address1' | 'city' | 'id' | 'phone' | 'zipcode'
          >
        >;
        loyaltyCards?: Maybe<
          Array<
            { __typename?: 'LoyaltyCard' } & Pick<LoyaltyCard, 'id' | 'cardNumber'> & {
                supplier: { __typename?: 'Supplier' } & Pick<Supplier, 'id' | 'name'> & {
                    logo?: Maybe<
                      { __typename?: 'Asset' } & Pick<Asset, 'custom' | 'altText' | 'title'>
                    >;
                  };
              }
          >
        >;
        defaultCreditCard?: Maybe<
          { __typename?: 'CreditCard' } & Pick<CreditCard, 'lastDigits' | 'ccType' | 'id'>
        >;
      }
  >;
};

export type StockNotificationsQueryVariables = {};

export type StockNotificationsQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id'> & {
        pendingStockNotifications?: Maybe<
          Array<
            { __typename?: 'StockNotification' } & Pick<StockNotification, 'id'> & {
                variant?: Maybe<
                  { __typename?: 'Variant' } & Pick<Variant, 'id'> & {
                      product?: Maybe<{ __typename?: 'Product' } & Pick<Product, 'id'>>;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export const SuppliersDocument = gql`
  query Suppliers {
    suppliers {
      id
      city
      description
      websiteName
      websiteUrl
      masterSupplier
      supportsLoyaltyCards
      name
      state {
        id
        abbr
      }
      images {
        id
        url
        altText
        title
      }
      categories {
        id
        name
      }
    }
  }
`;

/**
 * __useSuppliersQuery__
 *
 * To run a query within a React component, call `useSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuppliersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSuppliersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SuppliersQuery, SuppliersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<SuppliersQuery, SuppliersQueryVariables>(
    SuppliersDocument,
    baseOptions,
  );
}
export function useSuppliersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SuppliersQuery, SuppliersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<SuppliersQuery, SuppliersQueryVariables>(
    SuppliersDocument,
    baseOptions,
  );
}
export type SuppliersQueryHookResult = ReturnType<typeof useSuppliersQuery>;
export type SuppliersLazyQueryHookResult = ReturnType<typeof useSuppliersLazyQuery>;
export type SuppliersQueryResult = ApolloReactCommon.QueryResult<
  SuppliersQuery,
  SuppliersQueryVariables
>;
export const SupplierDocument = gql`
  query Supplier($id: ID!) {
    supplier(id: $id) {
      id
      city
      description
      websiteName
      websiteUrl
      supportsLoyaltyCards
      name
      supportsLoyaltyCards
      logo {
        url
        altText
        title
      }
      state {
        id
        abbr
      }
      images {
        id
        url
        altText
        title
      }
      products {
        id
        name
      }
    }
  }
`;

/**
 * __useSupplierQuery__
 *
 * To run a query within a React component, call `useSupplierQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupplierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupplierQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSupplierQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SupplierQuery, SupplierQueryVariables>,
) {
  return ApolloReactHooks.useQuery<SupplierQuery, SupplierQueryVariables>(
    SupplierDocument,
    baseOptions,
  );
}
export function useSupplierLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SupplierQuery, SupplierQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<SupplierQuery, SupplierQueryVariables>(
    SupplierDocument,
    baseOptions,
  );
}
export type SupplierQueryHookResult = ReturnType<typeof useSupplierQuery>;
export type SupplierLazyQueryHookResult = ReturnType<typeof useSupplierLazyQuery>;
export type SupplierQueryResult = ApolloReactCommon.QueryResult<
  SupplierQuery,
  SupplierQueryVariables
>;
export const AddProductToCartDocument = gql`
  mutation AddProductToCart($input: AddCartInput!) {
    addCart(input: $input) {
      id
      currency
      itemCount
      itemTotal
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      shipmentTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        source {
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        state
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type AddProductToCartMutationFn = ApolloReactCommon.MutationFunction<
  AddProductToCartMutation,
  AddProductToCartMutationVariables
>;

/**
 * __useAddProductToCartMutation__
 *
 * To run a mutation, you first call `useAddProductToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToCartMutation, { data, loading, error }] = useAddProductToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductToCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddProductToCartMutation,
    AddProductToCartMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddProductToCartMutation, AddProductToCartMutationVariables>(
    AddProductToCartDocument,
    baseOptions,
  );
}
export type AddProductToCartMutationHookResult = ReturnType<typeof useAddProductToCartMutation>;
export type AddProductToCartMutationResult = ApolloReactCommon.MutationResult<
  AddProductToCartMutation
>;
export type AddProductToCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddProductToCartMutation,
  AddProductToCartMutationVariables
>;
export const AddCategoryToCartDocument = gql`
  mutation AddCategoryToCart($input: AddCategoryInput!) {
    addCategoryToCart(input: $input) {
      id
      currency
      itemCount
      itemTotal
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      shipmentTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        source {
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        state
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type AddCategoryToCartMutationFn = ApolloReactCommon.MutationFunction<
  AddCategoryToCartMutation,
  AddCategoryToCartMutationVariables
>;

/**
 * __useAddCategoryToCartMutation__
 *
 * To run a mutation, you first call `useAddCategoryToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryToCartMutation, { data, loading, error }] = useAddCategoryToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCategoryToCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddCategoryToCartMutation,
    AddCategoryToCartMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    AddCategoryToCartMutation,
    AddCategoryToCartMutationVariables
  >(AddCategoryToCartDocument, baseOptions);
}
export type AddCategoryToCartMutationHookResult = ReturnType<typeof useAddCategoryToCartMutation>;
export type AddCategoryToCartMutationResult = ApolloReactCommon.MutationResult<
  AddCategoryToCartMutation
>;
export type AddCategoryToCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCategoryToCartMutation,
  AddCategoryToCartMutationVariables
>;
export const UpdateProductInsideCartDocument = gql`
  mutation UpdateProductInsideCart($input: UpdateProductToCartInput!) {
    updateProductToCart(input: $input) {
      id
      currency
      itemCount
      itemTotal
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      shipmentTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        state
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
        adjustments {
          amount
          id
          eligible
          label
          source {
            ... on PromotionAction {
              id
              promotion {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
export type UpdateProductInsideCartMutationFn = ApolloReactCommon.MutationFunction<
  UpdateProductInsideCartMutation,
  UpdateProductInsideCartMutationVariables
>;

/**
 * __useUpdateProductInsideCartMutation__
 *
 * To run a mutation, you first call `useUpdateProductInsideCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductInsideCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductInsideCartMutation, { data, loading, error }] = useUpdateProductInsideCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductInsideCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateProductInsideCartMutation,
    UpdateProductInsideCartMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateProductInsideCartMutation,
    UpdateProductInsideCartMutationVariables
  >(UpdateProductInsideCartDocument, baseOptions);
}
export type UpdateProductInsideCartMutationHookResult = ReturnType<
  typeof useUpdateProductInsideCartMutation
>;
export type UpdateProductInsideCartMutationResult = ApolloReactCommon.MutationResult<
  UpdateProductInsideCartMutation
>;
export type UpdateProductInsideCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateProductInsideCartMutation,
  UpdateProductInsideCartMutationVariables
>;
export const AddCharitableContributionToCartDocument = gql`
  mutation AddCharitableContributionToCart($input: AddCharitableContributionToCartInput!) {
    addCharitableContributionToCart(input: $input) {
      id
      itemCount
      itemTotal
      currency
      total
      merchandiseTotal
      preTaxAmount
      charitableContributionTotal
      shipping
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type AddCharitableContributionToCartMutationFn = ApolloReactCommon.MutationFunction<
  AddCharitableContributionToCartMutation,
  AddCharitableContributionToCartMutationVariables
>;

/**
 * __useAddCharitableContributionToCartMutation__
 *
 * To run a mutation, you first call `useAddCharitableContributionToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCharitableContributionToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCharitableContributionToCartMutation, { data, loading, error }] = useAddCharitableContributionToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCharitableContributionToCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddCharitableContributionToCartMutation,
    AddCharitableContributionToCartMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    AddCharitableContributionToCartMutation,
    AddCharitableContributionToCartMutationVariables
  >(AddCharitableContributionToCartDocument, baseOptions);
}
export type AddCharitableContributionToCartMutationHookResult = ReturnType<
  typeof useAddCharitableContributionToCartMutation
>;
export type AddCharitableContributionToCartMutationResult = ApolloReactCommon.MutationResult<
  AddCharitableContributionToCartMutation
>;
export type AddCharitableContributionToCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCharitableContributionToCartMutation,
  AddCharitableContributionToCartMutationVariables
>;
export const RemoveCharitableContributionFromCartDocument = gql`
  mutation RemoveCharitableContributionFromCart(
    $input: RemoveCharitableContributionFromCartInput!
  ) {
    removeCharitableContributionFromCart(input: $input) {
      id
      itemCount
      itemTotal
      currency
      total
      merchandiseTotal
      preTaxAmount
      charitableContributionTotal
      shipping
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type RemoveCharitableContributionFromCartMutationFn = ApolloReactCommon.MutationFunction<
  RemoveCharitableContributionFromCartMutation,
  RemoveCharitableContributionFromCartMutationVariables
>;

/**
 * __useRemoveCharitableContributionFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveCharitableContributionFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCharitableContributionFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCharitableContributionFromCartMutation, { data, loading, error }] = useRemoveCharitableContributionFromCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCharitableContributionFromCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveCharitableContributionFromCartMutation,
    RemoveCharitableContributionFromCartMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RemoveCharitableContributionFromCartMutation,
    RemoveCharitableContributionFromCartMutationVariables
  >(RemoveCharitableContributionFromCartDocument, baseOptions);
}
export type RemoveCharitableContributionFromCartMutationHookResult = ReturnType<
  typeof useRemoveCharitableContributionFromCartMutation
>;
export type RemoveCharitableContributionFromCartMutationResult = ApolloReactCommon.MutationResult<
  RemoveCharitableContributionFromCartMutation
>;
export type RemoveCharitableContributionFromCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveCharitableContributionFromCartMutation,
  RemoveCharitableContributionFromCartMutationVariables
>;
export const UpdatePlaceOrderDocument = gql`
  mutation UpdatePlaceOrder($input: UpdateInput!) {
    checkoutUpdate(input: $input) {
      id
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      shipmentTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        state
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type UpdatePlaceOrderMutationFn = ApolloReactCommon.MutationFunction<
  UpdatePlaceOrderMutation,
  UpdatePlaceOrderMutationVariables
>;

/**
 * __useUpdatePlaceOrderMutation__
 *
 * To run a mutation, you first call `useUpdatePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaceOrderMutation, { data, loading, error }] = useUpdatePlaceOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlaceOrderMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdatePlaceOrderMutation,
    UpdatePlaceOrderMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdatePlaceOrderMutation, UpdatePlaceOrderMutationVariables>(
    UpdatePlaceOrderDocument,
    baseOptions,
  );
}
export type UpdatePlaceOrderMutationHookResult = ReturnType<typeof useUpdatePlaceOrderMutation>;
export type UpdatePlaceOrderMutationResult = ApolloReactCommon.MutationResult<
  UpdatePlaceOrderMutation
>;
export type UpdatePlaceOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePlaceOrderMutation,
  UpdatePlaceOrderMutationVariables
>;
export const NextPlaceOrderDocument = gql`
  mutation NextPlaceOrder($input: NextInput!) {
    checkoutNext(input: $input) {
      id
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      shipmentTotal
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
        state
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type NextPlaceOrderMutationFn = ApolloReactCommon.MutationFunction<
  NextPlaceOrderMutation,
  NextPlaceOrderMutationVariables
>;

/**
 * __useNextPlaceOrderMutation__
 *
 * To run a mutation, you first call `useNextPlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNextPlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [nextPlaceOrderMutation, { data, loading, error }] = useNextPlaceOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNextPlaceOrderMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    NextPlaceOrderMutation,
    NextPlaceOrderMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<NextPlaceOrderMutation, NextPlaceOrderMutationVariables>(
    NextPlaceOrderDocument,
    baseOptions,
  );
}
export type NextPlaceOrderMutationHookResult = ReturnType<typeof useNextPlaceOrderMutation>;
export type NextPlaceOrderMutationResult = ApolloReactCommon.MutationResult<NextPlaceOrderMutation>;
export type NextPlaceOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<
  NextPlaceOrderMutation,
  NextPlaceOrderMutationVariables
>;
export const CompletePlaceOrderDocument = gql`
  mutation CompletePlaceOrder($input: CompleteInput!) {
    checkoutComplete(input: $input) {
      id
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      salesTax
    }
  }
`;
export type CompletePlaceOrderMutationFn = ApolloReactCommon.MutationFunction<
  CompletePlaceOrderMutation,
  CompletePlaceOrderMutationVariables
>;

/**
 * __useCompletePlaceOrderMutation__
 *
 * To run a mutation, you first call `useCompletePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePlaceOrderMutation, { data, loading, error }] = useCompletePlaceOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompletePlaceOrderMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CompletePlaceOrderMutation,
    CompletePlaceOrderMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CompletePlaceOrderMutation,
    CompletePlaceOrderMutationVariables
  >(CompletePlaceOrderDocument, baseOptions);
}
export type CompletePlaceOrderMutationHookResult = ReturnType<typeof useCompletePlaceOrderMutation>;
export type CompletePlaceOrderMutationResult = ApolloReactCommon.MutationResult<
  CompletePlaceOrderMutation
>;
export type CompletePlaceOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CompletePlaceOrderMutation,
  CompletePlaceOrderMutationVariables
>;
export const AddDriverTipDocument = gql`
  mutation AddDriverTip($input: AddDriverTipInput!) {
    checkoutAddDriverTip(input: $input) {
      id
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      salesTax
    }
  }
`;
export type AddDriverTipMutationFn = ApolloReactCommon.MutationFunction<
  AddDriverTipMutation,
  AddDriverTipMutationVariables
>;

/**
 * __useAddDriverTipMutation__
 *
 * To run a mutation, you first call `useAddDriverTipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDriverTipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDriverTipMutation, { data, loading, error }] = useAddDriverTipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDriverTipMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddDriverTipMutation,
    AddDriverTipMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddDriverTipMutation, AddDriverTipMutationVariables>(
    AddDriverTipDocument,
    baseOptions,
  );
}
export type AddDriverTipMutationHookResult = ReturnType<typeof useAddDriverTipMutation>;
export type AddDriverTipMutationResult = ApolloReactCommon.MutationResult<AddDriverTipMutation>;
export type AddDriverTipMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddDriverTipMutation,
  AddDriverTipMutationVariables
>;
export const AddPromoCodeDocument = gql`
  mutation AddPromoCode($input: AddPromoCodeInput!) {
    addPromoCode(input: $input) {
      id
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      shipmentTotal
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
        state
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type AddPromoCodeMutationFn = ApolloReactCommon.MutationFunction<
  AddPromoCodeMutation,
  AddPromoCodeMutationVariables
>;

/**
 * __useAddPromoCodeMutation__
 *
 * To run a mutation, you first call `useAddPromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPromoCodeMutation, { data, loading, error }] = useAddPromoCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPromoCodeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddPromoCodeMutation,
    AddPromoCodeMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddPromoCodeMutation, AddPromoCodeMutationVariables>(
    AddPromoCodeDocument,
    baseOptions,
  );
}
export type AddPromoCodeMutationHookResult = ReturnType<typeof useAddPromoCodeMutation>;
export type AddPromoCodeMutationResult = ApolloReactCommon.MutationResult<AddPromoCodeMutation>;
export type AddPromoCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddPromoCodeMutation,
  AddPromoCodeMutationVariables
>;
export const RemovePromoCodeDocument = gql`
  mutation RemovePromoCode($input: RemovePromoCodeInput!) {
    removePromoCode(input: $input) {
      id
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      shipmentTotal
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      charitableContributionTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      payments {
        id
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
        state
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;
export type RemovePromoCodeMutationFn = ApolloReactCommon.MutationFunction<
  RemovePromoCodeMutation,
  RemovePromoCodeMutationVariables
>;

/**
 * __useRemovePromoCodeMutation__
 *
 * To run a mutation, you first call `useRemovePromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePromoCodeMutation, { data, loading, error }] = useRemovePromoCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemovePromoCodeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemovePromoCodeMutation,
    RemovePromoCodeMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<RemovePromoCodeMutation, RemovePromoCodeMutationVariables>(
    RemovePromoCodeDocument,
    baseOptions,
  );
}
export type RemovePromoCodeMutationHookResult = ReturnType<typeof useRemovePromoCodeMutation>;
export type RemovePromoCodeMutationResult = ApolloReactCommon.MutationResult<
  RemovePromoCodeMutation
>;
export type RemovePromoCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemovePromoCodeMutation,
  RemovePromoCodeMutationVariables
>;
export const CartCountDocument = gql`
  query CartCount {
    cart {
      id
      itemCount
      itemTotal
      total
    }
  }
`;

/**
 * __useCartCountQuery__
 *
 * To run a query within a React component, call `useCartCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CartCountQuery, CartCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CartCountQuery, CartCountQueryVariables>(
    CartCountDocument,
    baseOptions,
  );
}
export function useCartCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CartCountQuery, CartCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CartCountQuery, CartCountQueryVariables>(
    CartCountDocument,
    baseOptions,
  );
}
export type CartCountQueryHookResult = ReturnType<typeof useCartCountQuery>;
export type CartCountLazyQueryHookResult = ReturnType<typeof useCartCountLazyQuery>;
export type CartCountQueryResult = ApolloReactCommon.QueryResult<
  CartCountQuery,
  CartCountQueryVariables
>;
export const CartViewDocument = gql`
  query CartView {
    cart {
      id
      itemCount
      itemTotal
      currency
      total
      state
      merchandiseTotal
      preTaxAmount
      charitableContributionTotal
      shipping
      createdAt
      salesTax
      shipmentTotal
      insufficientStockLines {
        quantity
        product {
          id
          name
          totalOnHand
          __typename
        }
        __typename
      }
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      specialInstructions
      driverTipTotal
      payments {
        id
        state
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
      }
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        phone
        city
        zipcode
      }
      billAddress {
        address1
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          totalOnHand
          amount
          currency
          displayAmount
          productProperties {
            id
            value
            property {
              id
              name
            }
          }
          images {
            id
            thumbnail
            altText
            title
          }
        }
        adjustments {
          amount
          id
          eligible
          label
          source {
            ... on PromotionAction {
              id
              promotion {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useCartViewQuery__
 *
 * To run a query within a React component, call `useCartViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartViewQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartViewQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CartViewQuery, CartViewQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CartViewQuery, CartViewQueryVariables>(
    CartViewDocument,
    baseOptions,
  );
}
export function useCartViewLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CartViewQuery, CartViewQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CartViewQuery, CartViewQueryVariables>(
    CartViewDocument,
    baseOptions,
  );
}
export type CartViewQueryHookResult = ReturnType<typeof useCartViewQuery>;
export type CartViewLazyQueryHookResult = ReturnType<typeof useCartViewLazyQuery>;
export type CartViewQueryResult = ApolloReactCommon.QueryResult<
  CartViewQuery,
  CartViewQueryVariables
>;
export const DeliverySlotsDocument = gql`
  query DeliverySlots {
    shipmentMethod {
      id
      name
      interrimHolidays
      deliveryToday {
        date
        deliverySlots {
          displayTime
          id
          shippingMethod {
            calculator {
              deliveryFee
              preferences
            }
          }
        }
        displayTitle
      }
      deliveryTomorrow {
        date
        deliverySlots {
          displayTime
          id
          shippingMethod {
            calculator {
              deliveryFee
              preferences
            }
          }
        }
        displayTitle
      }
      calculator {
        deliveryFee
      }
    }
  }
`;

/**
 * __useDeliverySlotsQuery__
 *
 * To run a query within a React component, call `useDeliverySlotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliverySlotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliverySlotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliverySlotsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<DeliverySlotsQuery, DeliverySlotsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<DeliverySlotsQuery, DeliverySlotsQueryVariables>(
    DeliverySlotsDocument,
    baseOptions,
  );
}
export function useDeliverySlotsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    DeliverySlotsQuery,
    DeliverySlotsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<DeliverySlotsQuery, DeliverySlotsQueryVariables>(
    DeliverySlotsDocument,
    baseOptions,
  );
}
export type DeliverySlotsQueryHookResult = ReturnType<typeof useDeliverySlotsQuery>;
export type DeliverySlotsLazyQueryHookResult = ReturnType<typeof useDeliverySlotsLazyQuery>;
export type DeliverySlotsQueryResult = ApolloReactCommon.QueryResult<
  DeliverySlotsQuery,
  DeliverySlotsQueryVariables
>;
export const CharitableContributionsDocument = gql`
  query CharitableContributions {
    charitableContributions {
      charity {
        id
        name
        logo {
          thumbnail
          title
          altText
        }
      }
      id
      description
      fullDescription
    }
  }
`;

/**
 * __useCharitableContributionsQuery__
 *
 * To run a query within a React component, call `useCharitableContributionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharitableContributionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharitableContributionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCharitableContributionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CharitableContributionsQuery,
    CharitableContributionsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    CharitableContributionsQuery,
    CharitableContributionsQueryVariables
  >(CharitableContributionsDocument, baseOptions);
}
export function useCharitableContributionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CharitableContributionsQuery,
    CharitableContributionsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    CharitableContributionsQuery,
    CharitableContributionsQueryVariables
  >(CharitableContributionsDocument, baseOptions);
}
export type CharitableContributionsQueryHookResult = ReturnType<
  typeof useCharitableContributionsQuery
>;
export type CharitableContributionsLazyQueryHookResult = ReturnType<
  typeof useCharitableContributionsLazyQuery
>;
export type CharitableContributionsQueryResult = ApolloReactCommon.QueryResult<
  CharitableContributionsQuery,
  CharitableContributionsQueryVariables
>;
export const OrderListDocument = gql`
  query OrderList {
    orderList {
      id
      total
      state
      createdAt
      completedAt
      number
      shipments {
        requestedDeliveryDate
      }
    }
  }
`;

/**
 * __useOrderListQuery__
 *
 * To run a query within a React component, call `useOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderListQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrderListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<OrderListQuery, OrderListQueryVariables>,
) {
  return ApolloReactHooks.useQuery<OrderListQuery, OrderListQueryVariables>(
    OrderListDocument,
    baseOptions,
  );
}
export function useOrderListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<OrderListQuery, OrderListQueryVariables>(
    OrderListDocument,
    baseOptions,
  );
}
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListLazyQueryHookResult = ReturnType<typeof useOrderListLazyQuery>;
export type OrderListQueryResult = ApolloReactCommon.QueryResult<
  OrderListQuery,
  OrderListQueryVariables
>;
export const OrderDocument = gql`
  query Order($id: ID!) {
    order(id: $id) {
      id
      total
      state
      merchandiseTotal
      preTaxAmount
      shipping
      createdAt
      specialInstructions
      number
      driverTipTotal
      shipmentAdjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on DriverTip {
            tipStyle
            id
            amount
            __typename
          }
          __typename
        }
      }
      adjustments {
        amount
        id
        eligible
        source {
          ... on PromotionAction {
            id
            promotion {
              name
              code
              id
            }
          }
          ... on CharitableContribution {
            id
            donation
            __typename
          }
        }
      }
      charitableContributionTotal
      payments {
        id
        state
        source {
          ... on CreditCard {
            id
            lastDigits
            ccType
          }
        }
      }
      salesTax
      shipments {
        requestedDeliveryDate
        deliverySlot {
          id
          displayTime
        }
      }
      shipAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      billAddress {
        address1
        address2
        phone
        city
        zipcode
      }
      lineItems {
        id
        price
        quantity
        product {
          id
          name
          amount
          currency
          displayAmount
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  return ApolloReactHooks.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
}
export function useOrderLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
}
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = ApolloReactCommon.QueryResult<OrderQuery, OrderQueryVariables>;
export const ContactUsDocument = gql`
  mutation ContactUs($input: ContactUsInput!) {
    contactUs(input: $input) {
      successMessage
    }
  }
`;
export type ContactUsMutationFn = ApolloReactCommon.MutationFunction<
  ContactUsMutation,
  ContactUsMutationVariables
>;

/**
 * __useContactUsMutation__
 *
 * To run a mutation, you first call `useContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsMutation, { data, loading, error }] = useContactUsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactUsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ContactUsMutation, ContactUsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ContactUsMutation, ContactUsMutationVariables>(
    ContactUsDocument,
    baseOptions,
  );
}
export type ContactUsMutationHookResult = ReturnType<typeof useContactUsMutation>;
export type ContactUsMutationResult = ApolloReactCommon.MutationResult<ContactUsMutation>;
export type ContactUsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ContactUsMutation,
  ContactUsMutationVariables
>;
export const DriverTipsDocument = gql`
  query DriverTips {
    driverTips {
      id
      title
      tipStyle
      amount
    }
  }
`;

/**
 * __useDriverTipsQuery__
 *
 * To run a query within a React component, call `useDriverTipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDriverTipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDriverTipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDriverTipsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<DriverTipsQuery, DriverTipsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<DriverTipsQuery, DriverTipsQueryVariables>(
    DriverTipsDocument,
    baseOptions,
  );
}
export function useDriverTipsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DriverTipsQuery, DriverTipsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<DriverTipsQuery, DriverTipsQueryVariables>(
    DriverTipsDocument,
    baseOptions,
  );
}
export type DriverTipsQueryHookResult = ReturnType<typeof useDriverTipsQuery>;
export type DriverTipsLazyQueryHookResult = ReturnType<typeof useDriverTipsLazyQuery>;
export type DriverTipsQueryResult = ApolloReactCommon.QueryResult<
  DriverTipsQuery,
  DriverTipsQueryVariables
>;
export const AddLoyaltyCardDocument = gql`
  mutation AddLoyaltyCard($input: CreateLoyaltyCardInput!) {
    addLoyaltyCard(input: $input) {
      cardNumber
      id
      supplier {
        name
        logo {
          custom(maxHeight: 100, maxWidth: 100)
          title
          altText
        }
      }
      user {
        id
        loyaltyCards {
          id
          supplier {
            id
            name
            logo {
              custom(maxHeight: 100, maxWidth: 100)
              altText
              title
            }
          }
          cardNumber
        }
      }
    }
  }
`;
export type AddLoyaltyCardMutationFn = ApolloReactCommon.MutationFunction<
  AddLoyaltyCardMutation,
  AddLoyaltyCardMutationVariables
>;

/**
 * __useAddLoyaltyCardMutation__
 *
 * To run a mutation, you first call `useAddLoyaltyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLoyaltyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLoyaltyCardMutation, { data, loading, error }] = useAddLoyaltyCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddLoyaltyCardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddLoyaltyCardMutation,
    AddLoyaltyCardMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddLoyaltyCardMutation, AddLoyaltyCardMutationVariables>(
    AddLoyaltyCardDocument,
    baseOptions,
  );
}
export type AddLoyaltyCardMutationHookResult = ReturnType<typeof useAddLoyaltyCardMutation>;
export type AddLoyaltyCardMutationResult = ApolloReactCommon.MutationResult<AddLoyaltyCardMutation>;
export type AddLoyaltyCardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddLoyaltyCardMutation,
  AddLoyaltyCardMutationVariables
>;
export const UpdateLoyaltyCardDocument = gql`
  mutation UpdateLoyaltyCard($input: UpdateLoyaltyCardInput!) {
    updateLoyaltyCard(input: $input) {
      cardNumber
      id
      supplier {
        id
        name
        logo {
          custom(maxHeight: 100, maxWidth: 100)
          altText
          title
        }
      }
      user {
        id
        loyaltyCards {
          id
          supplier {
            id
            name
            logo {
              custom(maxHeight: 100, maxWidth: 100)
              altText
              title
            }
          }
          cardNumber
        }
      }
    }
  }
`;
export type UpdateLoyaltyCardMutationFn = ApolloReactCommon.MutationFunction<
  UpdateLoyaltyCardMutation,
  UpdateLoyaltyCardMutationVariables
>;

/**
 * __useUpdateLoyaltyCardMutation__
 *
 * To run a mutation, you first call `useUpdateLoyaltyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoyaltyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoyaltyCardMutation, { data, loading, error }] = useUpdateLoyaltyCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLoyaltyCardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateLoyaltyCardMutation,
    UpdateLoyaltyCardMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateLoyaltyCardMutation,
    UpdateLoyaltyCardMutationVariables
  >(UpdateLoyaltyCardDocument, baseOptions);
}
export type UpdateLoyaltyCardMutationHookResult = ReturnType<typeof useUpdateLoyaltyCardMutation>;
export type UpdateLoyaltyCardMutationResult = ApolloReactCommon.MutationResult<
  UpdateLoyaltyCardMutation
>;
export type UpdateLoyaltyCardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateLoyaltyCardMutation,
  UpdateLoyaltyCardMutationVariables
>;
export const RemoveLoyaltyCardDocument = gql`
  mutation RemoveLoyaltyCard($input: DestroyLoyaltyCardInput!) {
    removeLoyaltyCard(input: $input)
  }
`;
export type RemoveLoyaltyCardMutationFn = ApolloReactCommon.MutationFunction<
  RemoveLoyaltyCardMutation,
  RemoveLoyaltyCardMutationVariables
>;

/**
 * __useRemoveLoyaltyCardMutation__
 *
 * To run a mutation, you first call `useRemoveLoyaltyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLoyaltyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLoyaltyCardMutation, { data, loading, error }] = useRemoveLoyaltyCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveLoyaltyCardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveLoyaltyCardMutation,
    RemoveLoyaltyCardMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RemoveLoyaltyCardMutation,
    RemoveLoyaltyCardMutationVariables
  >(RemoveLoyaltyCardDocument, baseOptions);
}
export type RemoveLoyaltyCardMutationHookResult = ReturnType<typeof useRemoveLoyaltyCardMutation>;
export type RemoveLoyaltyCardMutationResult = ApolloReactCommon.MutationResult<
  RemoveLoyaltyCardMutation
>;
export type RemoveLoyaltyCardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveLoyaltyCardMutation,
  RemoveLoyaltyCardMutationVariables
>;
export const CategoriesDocument = gql`
  query Categories {
    categories(maxDepth: 2) {
      id
      name
      description
      hasChildren
      addProductsAllowed
      promotionals {
        id
        image {
          custom(maxHeight: 290, maxWidth: 290)
          altText
          title
        }
        targetUrl
        newWindow
      }
      products(includeDescendants: true) {
        id
        name
        amount
        isAvailable
        totalOnHand
        productProperties {
          id
          value
          property {
            name
            id
          }
        }
        defaultVariant {
          id
          purchasable
        }
        images {
          id
          thumbnail
          altText
          title
        }
      }
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions,
  );
}
export function useCategoriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions,
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>;
export const SimilarProductsDocument = gql`
  query SimilarProducts($productId: ID!) {
    similarProducts(productId: $productId) {
      id
      name
      amount
      isAvailable
      productProperties {
        id
        value
        property {
          name
          id
        }
      }
      defaultVariant {
        id
        purchasable
      }
      images {
        id
        thumbnail
        altText
        title
      }
    }
  }
`;

/**
 * __useSimilarProductsQuery__
 *
 * To run a query within a React component, call `useSimilarProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimilarProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimilarProductsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useSimilarProductsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SimilarProductsQuery,
    SimilarProductsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<SimilarProductsQuery, SimilarProductsQueryVariables>(
    SimilarProductsDocument,
    baseOptions,
  );
}
export function useSimilarProductsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SimilarProductsQuery,
    SimilarProductsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<SimilarProductsQuery, SimilarProductsQueryVariables>(
    SimilarProductsDocument,
    baseOptions,
  );
}
export type SimilarProductsQueryHookResult = ReturnType<typeof useSimilarProductsQuery>;
export type SimilarProductsLazyQueryHookResult = ReturnType<typeof useSimilarProductsLazyQuery>;
export type SimilarProductsQueryResult = ApolloReactCommon.QueryResult<
  SimilarProductsQuery,
  SimilarProductsQueryVariables
>;
export const CategoryDocument = gql`
  query Category($categoryId: ID!, $limit: Int) {
    category(id: $categoryId) {
      id
      name
      description
      permalink
      metaTitle
      metaDescription
      addProductsAllowed
      metaKeywords
      hasChildren
      promotionals {
        id
        image {
          custom(maxHeight: 290, maxWidth: 290)
          altText
          title
        }
        targetUrl
        newWindow
      }
      products(limit: $limit) {
        id
        name
        amount
        isAvailable
        totalOnHand
        productProperties {
          id
          value
          property {
            name
            id
          }
        }
        defaultVariant {
          id
          purchasable
        }
        images {
          id
          thumbnail
          altText
          title
        }
      }
      descendants {
        id
        name
        promotionals {
          id
          image {
            custom(maxHeight: 290, maxWidth: 290)
            altText
            title
          }
          targetUrl
          newWindow
        }
        hasChildren
        products(limit: $limit) {
          id
          name
          amount
          isAvailable
          productProperties {
            id
            value
            property {
              name
              id
            }
          }
          defaultVariant {
            id
            purchasable
          }
          images {
            id
            thumbnail
            altText
            title
          }
        }
      }
    }
  }
`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCategoryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryQuery, CategoryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    baseOptions,
  );
}
export function useCategoryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CategoryQuery, CategoryQueryVariables>(
    CategoryDocument,
    baseOptions,
  );
}
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = ApolloReactCommon.QueryResult<
  CategoryQuery,
  CategoryQueryVariables
>;
export const RootCategoryDocument = gql`
  query RootCategory {
    rootCategory {
      description
      promotionals {
        id
        image {
          custom(maxHeight: 290, maxWidth: 290)
          altText
          title
        }
        targetUrl
        newWindow
      }
    }
  }
`;

/**
 * __useRootCategoryQuery__
 *
 * To run a query within a React component, call `useRootCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRootCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRootCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useRootCategoryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<RootCategoryQuery, RootCategoryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<RootCategoryQuery, RootCategoryQueryVariables>(
    RootCategoryDocument,
    baseOptions,
  );
}
export function useRootCategoryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    RootCategoryQuery,
    RootCategoryQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<RootCategoryQuery, RootCategoryQueryVariables>(
    RootCategoryDocument,
    baseOptions,
  );
}
export type RootCategoryQueryHookResult = ReturnType<typeof useRootCategoryQuery>;
export type RootCategoryLazyQueryHookResult = ReturnType<typeof useRootCategoryLazyQuery>;
export type RootCategoryQueryResult = ApolloReactCommon.QueryResult<
  RootCategoryQuery,
  RootCategoryQueryVariables
>;
export const ProductDocument = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      name
      amount
      description
      metaTitle
      metaDescription
      metaKeywords
      isAvailable
      productProperties {
        id
        value
        property {
          name
          id
        }
      }
      defaultVariant {
        id
        purchasable
      }
      images {
        id
        url
        altText
        title
      }
      suppliers {
        id
        name
        supportsLoyaltyCards
        logo {
          custom(maxHeight: 130, maxWidth: 200)
          altText
          title
        }
      }
      totalOnHand
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    baseOptions,
  );
}
export function useProductLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    baseOptions,
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = ApolloReactCommon.QueryResult<ProductQuery, ProductQueryVariables>;
export const CreateStockNotificationDocument = gql`
  mutation CreateStockNotification($input: CreateStockNotificationInput!) {
    createStockNotification(input: $input) {
      id
      variant {
        id
        product {
          id
        }
      }
    }
  }
`;
export type CreateStockNotificationMutationFn = ApolloReactCommon.MutationFunction<
  CreateStockNotificationMutation,
  CreateStockNotificationMutationVariables
>;

/**
 * __useCreateStockNotificationMutation__
 *
 * To run a mutation, you first call `useCreateStockNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStockNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStockNotificationMutation, { data, loading, error }] = useCreateStockNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStockNotificationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateStockNotificationMutation,
    CreateStockNotificationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateStockNotificationMutation,
    CreateStockNotificationMutationVariables
  >(CreateStockNotificationDocument, baseOptions);
}
export type CreateStockNotificationMutationHookResult = ReturnType<
  typeof useCreateStockNotificationMutation
>;
export type CreateStockNotificationMutationResult = ApolloReactCommon.MutationResult<
  CreateStockNotificationMutation
>;
export type CreateStockNotificationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateStockNotificationMutation,
  CreateStockNotificationMutationVariables
>;
export const RemoveStockNotificationDocument = gql`
  mutation RemoveStockNotification($input: DestroyStockNotificationInput!) {
    removeStockNotification(input: $input)
  }
`;
export type RemoveStockNotificationMutationFn = ApolloReactCommon.MutationFunction<
  RemoveStockNotificationMutation,
  RemoveStockNotificationMutationVariables
>;

/**
 * __useRemoveStockNotificationMutation__
 *
 * To run a mutation, you first call `useRemoveStockNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStockNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStockNotificationMutation, { data, loading, error }] = useRemoveStockNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveStockNotificationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveStockNotificationMutation,
    RemoveStockNotificationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RemoveStockNotificationMutation,
    RemoveStockNotificationMutationVariables
  >(RemoveStockNotificationDocument, baseOptions);
}
export type RemoveStockNotificationMutationHookResult = ReturnType<
  typeof useRemoveStockNotificationMutation
>;
export type RemoveStockNotificationMutationResult = ApolloReactCommon.MutationResult<
  RemoveStockNotificationMutation
>;
export type RemoveStockNotificationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveStockNotificationMutation,
  RemoveStockNotificationMutationVariables
>;
export const ActiveQuickDeliveryDocument = gql`
  query ActiveQuickDelivery {
    activeQuickDelivery {
      contactInfo
      details
      id
      phone
      email
      shippingMethod {
        deliverySlots {
          id
          displayActualTime
        }
      }
      subtitle
      title
    }
  }
`;

/**
 * __useActiveQuickDeliveryQuery__
 *
 * To run a query within a React component, call `useActiveQuickDeliveryQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveQuickDeliveryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveQuickDeliveryQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveQuickDeliveryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ActiveQuickDeliveryQuery,
    ActiveQuickDeliveryQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ActiveQuickDeliveryQuery, ActiveQuickDeliveryQueryVariables>(
    ActiveQuickDeliveryDocument,
    baseOptions,
  );
}
export function useActiveQuickDeliveryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ActiveQuickDeliveryQuery,
    ActiveQuickDeliveryQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ActiveQuickDeliveryQuery, ActiveQuickDeliveryQueryVariables>(
    ActiveQuickDeliveryDocument,
    baseOptions,
  );
}
export type ActiveQuickDeliveryQueryHookResult = ReturnType<typeof useActiveQuickDeliveryQuery>;
export type ActiveQuickDeliveryLazyQueryHookResult = ReturnType<
  typeof useActiveQuickDeliveryLazyQuery
>;
export type ActiveQuickDeliveryQueryResult = ApolloReactCommon.QueryResult<
  ActiveQuickDeliveryQuery,
  ActiveQuickDeliveryQueryVariables
>;
export const ProductSearchDocument = gql`
  query ProductSearch($query: String!, $limit: Int, $offset: Int) {
    productSearch(query: $query, limit: $limit, offset: $offset) {
      id
      name
      amount
      description
      isAvailable
      variants {
        optionValues {
          presentation
        }
      }
      defaultVariant {
        id
        purchasable
      }
      images {
        id
        thumbnail
        altText
        title
      }
    }
  }
`;

/**
 * __useProductSearchQuery__
 *
 * To run a query within a React component, call `useProductSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useProductSearchQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ProductSearchQuery, ProductSearchQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ProductSearchQuery, ProductSearchQueryVariables>(
    ProductSearchDocument,
    baseOptions,
  );
}
export function useProductSearchLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProductSearchQuery,
    ProductSearchQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ProductSearchQuery, ProductSearchQueryVariables>(
    ProductSearchDocument,
    baseOptions,
  );
}
export type ProductSearchQueryHookResult = ReturnType<typeof useProductSearchQuery>;
export type ProductSearchLazyQueryHookResult = ReturnType<typeof useProductSearchLazyQuery>;
export type ProductSearchQueryResult = ApolloReactCommon.QueryResult<
  ProductSearchQuery,
  ProductSearchQueryVariables
>;
export const StoreDocument = gql`
  query Store {
    store {
      name
      id
      phone
      facebook
      instagram
    }
  }
`;

/**
 * __useStoreQuery__
 *
 * To run a query within a React component, call `useStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useStoreQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<StoreQuery, StoreQueryVariables>,
) {
  return ApolloReactHooks.useQuery<StoreQuery, StoreQueryVariables>(StoreDocument, baseOptions);
}
export function useStoreLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StoreQuery, StoreQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<StoreQuery, StoreQueryVariables>(StoreDocument, baseOptions);
}
export type StoreQueryHookResult = ReturnType<typeof useStoreQuery>;
export type StoreLazyQueryHookResult = ReturnType<typeof useStoreLazyQuery>;
export type StoreQueryResult = ApolloReactCommon.QueryResult<StoreQuery, StoreQueryVariables>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      firstName
      lastName
      phoneNo
    }
  }
`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    baseOptions,
  );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const ChangePasswordDocument = gql`
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      changed
    }
  }
`;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(
    ChangePasswordDocument,
    baseOptions,
  );
}
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const UserDetailsDocument = gql`
  query UserDetails {
    me {
      id
      firstName
      lastName
      email
      phoneNo
      addresses {
        address1
        city
        id
        phone
        zipcode
      }
      billAddress {
        address1
        city
        id
        phone
        zipcode
      }
      shipAddress {
        address1
        city
        id
        phone
        zipcode
      }
      loyaltyCards {
        id
        supplier {
          id
          name
          logo {
            custom(maxHeight: 100, maxWidth: 100)
            altText
            title
          }
        }
        cardNumber
      }
      cartSaved
      defaultCreditCard {
        lastDigits
        ccType
        id
      }
    }
  }
`;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(
    UserDetailsDocument,
    baseOptions,
  );
}
export function useUserDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(
    UserDetailsDocument,
    baseOptions,
  );
}
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsQueryResult = ApolloReactCommon.QueryResult<
  UserDetailsQuery,
  UserDetailsQueryVariables
>;
export const StockNotificationsDocument = gql`
  query StockNotifications {
    me {
      id
      pendingStockNotifications {
        id
        variant {
          id
          product {
            id
          }
        }
      }
    }
  }
`;

/**
 * __useStockNotificationsQuery__
 *
 * To run a query within a React component, call `useStockNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStockNotificationsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StockNotificationsQuery,
    StockNotificationsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<StockNotificationsQuery, StockNotificationsQueryVariables>(
    StockNotificationsDocument,
    baseOptions,
  );
}
export function useStockNotificationsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StockNotificationsQuery,
    StockNotificationsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<StockNotificationsQuery, StockNotificationsQueryVariables>(
    StockNotificationsDocument,
    baseOptions,
  );
}
export type StockNotificationsQueryHookResult = ReturnType<typeof useStockNotificationsQuery>;
export type StockNotificationsLazyQueryHookResult = ReturnType<
  typeof useStockNotificationsLazyQuery
>;
export type StockNotificationsQueryResult = ApolloReactCommon.QueryResult<
  StockNotificationsQuery,
  StockNotificationsQueryVariables
>;
