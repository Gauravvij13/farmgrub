export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  paymentSources: {
    lastDigits: string;
  };
  phoneNo: string;
  zipCode: string;
};
