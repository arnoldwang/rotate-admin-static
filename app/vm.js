var kom = require('knockout.mapping');
var _ = require('lodash');
var mixin = require('mixin-class');

var ajax = require('service/ajax');
var modal = require('service/modal');

var slice = [].slice;
var noop = function() {};

module.exports = mixin([
    {
        setData: function(data) {
            kom.fromJS(data, null, this);
            return this;
        },

        getData: function() {
            return kom.toJS(this); 
        },

        getAppState: function() {
            return state.getData();
        },

        setAppState: function(data) {
            state.setData(data);
            return this;
        },

        modal: function(options) {
            modal(_.extend({
                context: this
            }, options));
        },

        fetch: function(options) {
            ajax(_.extend({
                context: this
            }, options));
        },

        post: function(options) {
            options.data = JSON.stringify(options.data)

            ajax(_.extend({
                context: this,
                method: 'post',
                contentType: 'application/json'
            }, options));
        },

        pipe: function(fns) {
            var context = this;
            var args = slice.call(arguments, 1);
            return fns.concat(noop).reduceRight(function(callback, handler) {
                return function() {
                    var result = handler.apply(context, slice.call(arguments).concat(callback));
                    if (result) {
                        callback(result)
                    }
                }
            }).apply(null, args);
        }
    }
]);
