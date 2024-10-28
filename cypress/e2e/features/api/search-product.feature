Feature: Search Product API Functionalities

  Background:
    Given the user is not logged in

  @api-search-product
  Scenario Outline: User searches for a product and sees relevant results in the API
    When the user searches for "<productName>" through the API
    Then the API should return a status code of 200
    And the API response should contain products matching "<productName>"

  Examples:
    | productName |
    | tablet      |
    | laptop      |
    | speaker     |

  @api-search-product
  Scenario: User searches for a product that does not exist in the API
    When the user searches for "ABCDEFGH!@#$%^&*()" through the API
    Then the API should return a status code of 200
    And the API response should indicate that no products were found, empty list
