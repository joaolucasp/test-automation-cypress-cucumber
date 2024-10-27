export const NavbarLocators = {
  navigationLinks: {
    ourProducts: 'nav ul li:nth-child(8)',
    specialOffer: 'nav ul li:nth-child(7)',
    popularItems: 'nav ul li:nth-child(6)',
    contactUs: 'nav ul li:nth-child(5)',
  },

  searchProduct: {
    searchLink: '#search',
    searchInput: '#search input',
    
    searchResultsPopUp: {
      viewAllButton: '.searchPopUp .searchPopUp .top6Products a.viewAll',
  
      // The real index is N + 2, where N is the index of the product in the search results.
      productCard: (index: number) => `.searchPopUp .searchPopUp .top6Products a.product:nth-child(${index + 2})`
    }
  },

  profileLink: '#menuUserLink',
  cartLink: '#shoppingCartLink',
};