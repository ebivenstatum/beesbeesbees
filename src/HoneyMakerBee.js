var HoneyMakerBee = function() {

  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;


};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.contructor = HoneyMakerBee;
HoneyMakerBee.prototype.contructor.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}
