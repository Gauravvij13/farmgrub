import { gql } from 'apollo-boost';
import { CategoryType } from 'typings/categories';
import { SubCategoryType } from 'typings/subcategories';
import { ProductType } from 'typings/products';
import { UserType } from 'typings/user';

export type AllCategoryListQueryType = {
  categories?: CategoryType[];
};

export const TAB_LIST_QUERY = gql`
  query {
    categories {
      id
      name
    }
  }
`;
export type TabListQueryType = {
  categories?: CategoryType[];
};

export type SubCategoryListQueryType = {
  subCategories?: SubCategoryType[];
};

export type ProductDetailQueryType = {
  product?: ProductType;
};

export type SubCategoryQueryType = {
  subCategory?: SubCategoryType;
};

export const FETCH_USER_QUERY = gql`
  query {
    me {
      id
      firstName
      lastName
      email
      addressOne
      addressTwo
      city
      paymentSources {
        lastDigits
      }
      phoneNo
      zipCode
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
`;

export type UserQueryType = {
  me?: UserType;
};
