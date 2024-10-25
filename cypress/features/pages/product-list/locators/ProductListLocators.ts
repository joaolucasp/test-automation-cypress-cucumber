export const ProductListLocators = {
  filterSection: {
    totalItems: '.category-type-products .categoryLeft .filterCount a'
  },

  productList: {
    searchTitle: '#searchResultLabel',

    product: (index: number) => {
      const productIndex = index + 1;
      const productCard = `.category-type-products .categoryRight:first li:nth-child(${productIndex})`;

      return {
        card: productCard,
        image: `${productCard} img`,
        name: `${productCard} .productName`,
        price: `${productCard} .productPrice`,
      }
    }
  }
};