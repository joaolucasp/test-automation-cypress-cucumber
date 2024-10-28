Feature: Product Image Update API

  Background:
    Given an admin user is created and logged in
    And a random product ID is obtained from the product list

  @update-product-image
  Scenario Outline: Update a product image and verify response
    When the user updates the image of the product with ID "<productId>" with source "<source>" and color "<color>"
    Then the API should return a status code of 200
    And the product image with source "<source>" and color "<color>" should be updated successfully

  Examples:
    | source      | color   |
    | test-source | FFFFFF  |
    | demo-source | 000000  |
    | img-source  | FF5733  |
