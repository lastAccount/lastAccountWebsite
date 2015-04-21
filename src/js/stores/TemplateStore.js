var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TemplateConstants = require('../constants/TemplateConstants');
var assign = require('object-assign');
var $ = require('jquery');

var CHANGE_EVENT = 'change';

var userTemplate = {};

var TemplateStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action){
  switch(action.actionType){
    case TemplateConstants.SAVE:
      console.log('Trying to save');
      break;
    case TemplateConstants.GET_TEMPLATE:
      console.log('Trying to get user template');
      break;
    default:
      //no op
  }

});

module.exports = TemplateStore;