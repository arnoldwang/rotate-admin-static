var _ = require('lodash');
var ko = require('knockout');
var mixin = require('mixin-class');

var PageBuilder = require('crystal-page');
var State = require('crystal-state');
require('./setup-knockout');

var pageBuilder = new PageBuilder();
var state = new State.Hash();

state.onChange(function(data) {
    pageBuilder.activate(data.path, function(module) {
        if (module.onStateChange) {
            module.onStateChange(data.query);
        }
    });
})


// 所有的module都会继承这个类，写在gulpfile里面
var ViewModel = mixin({
    $state: state
});

ViewModel.create = function(props) {
    return _.extend(new this, props);
};

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
pageBuilder.render(document.body);


