Feature: Customer Tests

  Scenario: Add Customer
    Given the user should see 0 customers on the list
    When the user creates a customer with these data
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |
    Then the user should see a customer with these data on the list
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |

  Scenario: Edit Customer
    Given the user should see 0 customers on the list
    When the user creates a customer with these data
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |
    Then the user should see a customer with these data on the list
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |
    When the user edits customer "mohsen@gmail.com" with these data
      | FirstName | LastName | PhoneNumber   | DateOfBirth     | Email         | BankAccountNumber |
      | Ali       | Rezaei   | +989120331111 | Tue Jun 11 2024 | ali@gmail.com | 012345678901      |
    Then the user should not see a customer with these data on the list
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |
    Then the user should see a customer with these data on the list
      | FirstName | LastName | PhoneNumber   | DateOfBirth     | Email         | BankAccountNumber |
      | Ali       | Rezaei   | +989120331111 | Tue Jun 11 2024 | ali@gmail.com | 012345678901      |

  Scenario: Delete Customer
    Given the user should see 0 customers on the list
    When the user creates a customer with these data
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |
    Then the user should see a customer with these data on the list
      | FirstName | LastName | PhoneNumber  | DateOfBirth     | Email            | BankAccountNumber |
      | Mohsen    | Mousavi  | +31616833033 | Fri Jun 14 2024 | mohsen@gmail.com | 0112345678        |
    When the user deletes customer "mohsen@gmail.com"
    Then the user should see 0 customers on the list
