var _ = require('lodash');
var ko = require('knockout');
var mixin = require('mixin-class');

var Page = require('crystal-page');
var State = require('crystal-state');
require('./setup-knockout');

var page = new Page();
var state = new State[ENV.mock ? 'Hash': 'Location']();

state.onChange(function(data) {
    page.activate(data.path, function(module) {
        if (module.onStateChange) {
            module.onStateChange(data.query);
        }
    });
})


// 所有的module都会继承这个类，写在gulpfile里面
var ViewModel = mixin({
    getAppState: function() {
        return state.getData();
    },

    setAppState: function(data) {
        state.setData(data)
    }
});

ViewModel.create = function(props) {
    return _.extend(new this, props);
};

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

// start app
state.start();
page.render(document.body);


