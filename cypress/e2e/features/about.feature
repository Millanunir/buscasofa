Feature: Página About

  Scenario: El usuario ve la información del equipo en About
    Given el usuario navega a la pagina About
    Then debería ver el texto del numero de equipo
    And debería ver al miembro "Millan Madrid Sacristán" con aportacion "desarrollo de la aplicación, pruebas y documentación"
    And debería ver al miembro "Alberto Gimenez Torres" con aportacion "miembro del equipo"
    And debería ver al miembro "Edgar Arbones Chaparro" con aportacion "documentación"
    And debería ver al miembro "Rafael Morales Rodriguez" con aportacion "miembro del equipo"
