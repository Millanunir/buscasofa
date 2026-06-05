Feature: Footer

  Scenario: El usuario ve los miembros del equipo en el footer
    Given el usuario navega a la home
    Then debería ver en el footer a "Millan Madrid Sacristán"
    And debería ver en el footer a "Alberto Gimenez Torres"
    And debería ver en el footer a "Edgar Arbones Chaparro"
    And debería ver en el footer a "Rafael Morales Rodriguez"
