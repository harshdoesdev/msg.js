class MessageSystem {
  #gameObjects = new Map();

  // This method allows you to register a game object with the messaging system
  registerGameObject(gameObject) {
    // Check if there is already a list of game objects with the given tag
    let gameObjectList = this.#gameObjects.get(gameObject.tag);
    if (!gameObjectList) {
      // If not, create a new list for game objects with this tag
      gameObjectList = [];
      this.#gameObjects.set(gameObject.tag, gameObjectList);
    }

    // Check if the game object is already in the list
    if (gameObjectList.indexOf(gameObject) === -1) {
      // If not, add it to the list
      gameObjectList.push(gameObject);
    }
  }

  // This method allows you to unregister a game object from the messaging system
  unregisterGameObject(gameObject) {
    // Check if there is a list of game objects with the given tag
    let gameObjectList = this.#gameObjects.get(gameObject.tag);
    if (!gameObjectList) {
      return;
    }

    // Remove the game object from the list
    const index = gameObjectList.indexOf(gameObject);
    if (index !== -1) {
      gameObjectList.splice(index, 1);
    }
  }

  // This method allows you to send a message to a game object using its tag and a method name
  sendMessage(methodName, message) {
    // Split the methodName string at the "->" separator
    const [tag, name] = methodName.split('->');

    // Get the list of game objects with the given tag
    const gameObjectList = this.#gameObjects.get(tag);
    if (!gameObjectList) {
      console.error(`No game objects found with tag ${tag}`);
      return;
    }

    // Send the message to all game objects in the list
    for (const gameObject of gameObjectList) {
      if (gameObject[name]) {
        gameObject[name](message);
      } else {
        console.error(`Unable to send message to game object with tag ${tag} and method ${name}`);
      }
    }
  }
}
