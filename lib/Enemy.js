const Potion = require('./Potion');
const Character = require('./Character');

function Enemy(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * 10 + 85);
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
};

Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getStats = function() {
    return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
    };
};

Enemy.prototype.getInventory = function() {
    if (this.inventory.length) {
    return this.inventory;
    }
    return false;
};

Enemy.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};

Enemy.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };

  Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

module.exports = Enemy;