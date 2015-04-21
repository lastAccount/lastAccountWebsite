var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TemplateConstants = require('../constants/TemplateConstants');
var assign = require('object-assign');
var $ = require('jquery');

var CHANGE_EVENT = 'change';

var userTemplate = {};

var TemplateStore = assign({}, EventEmitter.prototype, {
  saveTemplate: function(template){

  },
  getTemplate: function(id){

  },
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
    //TODO
    case TemplateConstants.SAVE:
      console.log("Trying to save template");
      TemplateStore.saveTemplate(action.template);
      break;
    //TODO
    case TemplateConstants.GET_TEMPLATE:
      console.log("Trying to get template");
      TemplateStore.getTemplate(action.id);
      break;
    default:
      //no op
  }

});

module.exports = TemplateStore;