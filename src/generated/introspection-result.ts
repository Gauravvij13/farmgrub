export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'CharitableContributions',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Checkout',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'AdjustableInterface',
        possibleTypes: [
          {
            name: 'Order',
          },
          {
            name: 'LineItem',
          },
          {
            name: 'Shipment',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'Adjustable',
        possibleTypes: [
          {
            name: 'LineItem',
          },
          {
            name: 'Order',
          },
          {
            name: 'Shipment',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'AdjustmentSource',
        possibleTypes: [
          {
            name: 'CharitableContribution',
          },
          {
            name: 'DriverTip',
          },
          {
            name: 'PromotionAction',
          },
          {
            name: 'TaxRate',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'PaymentSource',
        possibleTypes: [
          {
            name: 'CreditCard',
          },
          {
            name: 'Order',
          },
          {
            name: 'PaymentMethod',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'DriverTips',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Orders',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Products',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'QuickDeliveries',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Suppliers',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Taxonomies',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Users',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Zipcodes',
        possibleTypes: [
          {
            name: 'Query',
          },
        ],
      },
    ],
  },
};
export default result;
