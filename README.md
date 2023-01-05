# msg.js
A Messaging System For Games

### Example
```javascript
const player1 = new GameObject(1, 'Player', 'player');
const player2 = new GameObject(2, 'Player', 'player');
const enemy1 = new GameObject(3, 'Enemy', 'enemy');
const enemy2 = new GameObject(4, 'Enemy', 'enemy');

messageSystem.registerGameObject(player1);
messageSystem.registerGameObject(player2);
messageSystem.registerGameObject(enemy1);
messageSystem.registerGameObject(enemy2);

// Try to re-register player1
messageSystem.registerGameObject(player1);

messageSystem.sendMessage('player->receiveMessage', 'Hello, players!');
// Output: "Player received message: Hello, players!" (twice)

messageSystem.sendMessage('enemy->receiveMessage', 'Hello, enemies!');
// Output: "Enemy received message: Hello, enemies!" (twice)
```
