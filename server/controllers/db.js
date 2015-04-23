/**
 * Start up Redis
 */
var redis = require('redis');
var client = redis.createClient();

client.on("error", function(err){
  console.error("REDIS ERROR:", err);
});

var redisController = {
  /**
   * Saves User template as value to session key
   */
  save: function(){

  },
  /** 
   * Get user template associated with session key
   */
  get: function(){

  },
  /**
   * Deletes template associated with key
   */
  remove: function(){

  }

}
module.exports = redisController;