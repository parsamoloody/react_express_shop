import { gql } from '@apollo/client';

export const GET_MAN = gql`
  query {
    theMan {
      man {
        categoryInformation {
          title
          path
          description
          image {
            src
            extension
            type
            alt
          }
        }
        shirts {
          categoryName
          image {
            src
            extension
            type
            alt
          }
          products {
            title
            image {
              src
              extension
              type
              alt
            }
            description
            price
            isDiscount
            discountRate
            rating
            author
            Date
          }
        }
        jeans {
          categoryName
          image {
            src
            extension
            type
            alt
          }
          products {
            title
            image {
              src
              extension
              type
              alt
            }
            description
            price
            isDiscount
            discountRate
            rating
            author
            Date
          }
        }
        sweaters {
          image {
            src
            extension
            type
            alt
          }
          products {
            title
            image {
              src
              extension
              type
              alt
            }
            description
            price
            isDiscount
            discountRate
            rating
            author
            Date
          }
        }
        suits {
          image {
            src
            extension
            type
            alt
          }
          products {
            title
            image {
              src
              extension
              type
              alt
            }
            description
            price
            isDiscount
            discountRate
            rating
            author
            Date
          }
        }
        outerwear {
          image {
            src
            extension
            type
            alt
          }
          products {
            title
            image {
              src
              extension
              type
              alt
            }
            description
            price
            isDiscount
            discountRate
            rating
            author
            Date
          }
        }
      }
    }
  }
`;
