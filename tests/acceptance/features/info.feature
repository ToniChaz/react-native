# features/documentation.feature
Feature: Load Info page
  As a user
  I want to load the info page

  Scenario: Load Info page
    Given I am on the Info screen and see the "The weather station" title
    When I click on Search Your City button
    Then I should see "Search you city" title