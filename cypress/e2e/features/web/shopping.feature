Feature: Shopping Cart Functionalities

  Background:
    Given the user is on the homepage

  Scenario Outline: User searches for a product and sees relevant results
    When the user searches for "<productName>"
    Then the user should see a list of products displayed
    And the displayed products should match the search criteria "<productName>"

  Examples:
    | productName |
    | tablet      |
    | laptop      |
    | speaker     |

  Scenario: User searches for a product that does not exist
    When the user searches for "ABCDEFGH!@#$%^&*()"
    Then the user should see a message indicating that no products were found
