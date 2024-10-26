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

  Scenario Outline: Add a product to the cart with a specific quantity
    When the user searches for "<productName>"
    And the user adds "<quantity>" of the first product to the cart
    Then the user should see "<quantity>" of "<productName>" added to the cart

  Examples:
    | productName                           | quantity |
    | HP STREAM - 11-D020NR LAPTOP          | 1        |
    | HP S9500 BLUETOOTH WIRELESS SPEAKER   | 2        |
    | HP PRO TABLET 608 G1                  | 3        |