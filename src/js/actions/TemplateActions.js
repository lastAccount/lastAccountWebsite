var AppDispatcher = require('../dispatcher/AppDispatcher');
var TemplateConstants = require('../constants/TemplateConstants');

var TemplateActions = {
  save: function(template){
    AppDispatcher.dispatch({
      actionType: TemplateConstants.SAVE,
      template: template
    });
  },
  get: function(id){
    AppDispatcher.dispatch({
      actionType: TemplateConstants.GET_TEMPLATE,
      id: id
    })
  }
};

module.exports = TemplateActions;