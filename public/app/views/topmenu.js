/*global $, Backbone,vex */

var Navigation = require('../../js/chrome/navigation');

var TopmenuView = (function(){
  'use strict';

  var clickToggleVisibility = function(event){
    event.preventDefault();

    Navigation.toggleVisibility(event);
  };
  
  var clickDeleteBin = function(event){
    event.preventDefault();

    if (confirm('Delete this bin?')) {
      Navigation.deleteBin();
    }
  };

  var clickRenameBin = function(event){
    event.preventDefault();

    vex.dialog.prompt({
      message: 'What is new name of this bin?',
      placeholder: 'Name of bin',
      className: 'vex-theme-os',
      callback: Navigation.renameBin
    });
  };
  
  return Backbone.View.extend({
    el: '#topmenu',
    events: {
      'click a.deletebin': 'deleteBin',
      'click a.renamebin': 'renameBin',
      'click a.visibilityToggle': 'ToggleVisibility'
    },
    deleteBin: clickDeleteBin,
    renameBin: clickRenameBin,
    ToggleVisibility: clickToggleVisibility
  });
})();

new TopmenuView();
