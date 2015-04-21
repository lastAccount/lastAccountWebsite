var AppDispatcher = require('../dispatcher/AppDispatcher');
var TemplateConstants = require('../constants/TemplateConstants');

var TemplateActions = {
  save: function(template){
    AppDispatcher.dispatch({
      actionType: TemplateConstants.SAVE,
      template: template
    });
  }
};

module.exports = TemplateActions;