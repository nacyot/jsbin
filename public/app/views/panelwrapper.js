/*global $, Backbone */

var PanelWrapperView = (function(){
  'use strict';

  var wishToGenie = function(){
    vex.dialog.prompt({
      message: 'What is your wish?',
      placeholder: 'Name of bin',
      className: 'vex-theme-os',
      callback: function(value) {
        alert(value);
      }
    });
  };
  
  return Backbone.View.extend({
    el: '.panelwrapper',
    events: {
      'keydown .CodeMirror': 'keydown',
    },
    keydown: function(event){
      if (event.metaKey && event.which === 13){
        wishToGenie();
      }
    },
    wishToGenie: wishToGenie
  });
})();

new PanelWrapperView();
