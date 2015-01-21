var _ = require('lodash');
var ko = require('knockout');
var mixin = require('mixin-class');

var Page = require('crystal-page');
var State = require('crystal-state');
require('./setup-knockout');

var page = new Page();
var state = new State.Location();

state.onChange(function(data) {
    page.activate(data.path, function(module) {
        if (module.onStateChange) {
            module.onStateChange(data.query);
        }
    });
});

// 所有的module都会继承这个类，写在gulpfile里面
var ViewModel = require('./vm');

// gulpfile里面用到
window.vm = function(mixins, html) {
    var vm = ViewModel.extend(mixins);
    if (html) {
        vm.mix({
            __view: html
        })
    }
    return vm;
};

// redirect by state
var $ = require('jquery');

$(document).delegate('a', 'click', function(e) {
    if(this.hasAttribute('external')){
       return;
    }

    state.setData(this.getAttribute('href', 2));
    return false;
});

// setup ajax error
var ajax = require('service/ajax');
var notification = require('service/notification');
ajax.error = function(jqXHR, statusText, error ) {
    notification.error(jqXHR.responseText || error, null, {
        timeOut: 0
    });
};

// start app
state.start();
page.render(document.body);


