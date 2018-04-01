Feature: As a collaborator I want to be able to create topics that currently aren't available in the platform

Scenario: I want to go to topics-to-teach 
    Given I go to topics-to-teach

Scenario: I want to see Add Topic dialog
    Given The button Agregar Tema in the left down corner of the page
    When I click on the button Agregar Tema the dialog Agregar Tema appears
       Then Description field should be hidden
       And Name filed should be visible
       And Expertise field should be visible
       And The button Agregar is disabled if at least one field is empty


Scenario: I try to add a topic that already exists
    Given The button Agregar Tema in the left down corner of the page 
    When I click on the button Agregar Tema the dialog Agregar Tema appears
        Then I fill the name field with the topic Java
        And I select in the expertise field ★★ as the expertise
        Then I click on Agregar
        Then I see an error banner under the name field
