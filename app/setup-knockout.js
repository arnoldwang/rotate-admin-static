var _ = require('lodash');
var ko = require('knockout');
var kom = require('knockout.mapping');
var mixin = require('mixin-class');
ko.setTemplateEngine(require('ko-string-template'));
require('knockout.punches');
ko.punches.enableAll();
ko.punches.attributeInterpolationMarkup.enable();
var moment = require("moment");

_.extend(ko.extenders, {
    ensureNumber: function(target) {
        // 强迫文本框进行刷新
        var forceUpdateNull = function() {
            target(target() === null ? undefined : null);
        };

        return ko.computed({
            read: target,

            write: function(v) {
                if (v == null || v === '') {
                    forceUpdateNull()
                    return;
                }

                var ret = v - 0;
                if (isNaN(ret)) {
                    forceUpdateNull()
                    return;
                }
                
                target(ret);

            }
        });
    }
});

ko.filters.json = function(o) {
    return JSON.stringify(ko.unwrap(o), null, 4);
};

ko.filters.enums = function(id,key) {
    id = ko.unwrap(id);
    var enums = window.enums[key]
    var list = enums.filter(function(item){
        return item.value===id
    })
    if(list&&list.length){
        return list[0].text
    }
    return '';
};

ko.filters.time = function(time,format) {
    if(!format){
        format = 'YYYY-MM-DD HH:mm:ss';
    }
    time = ko.unwrap(time);
    if(time){
        return moment(time).format(format)
    }
    return '';
};

ko.filters.highlightNull = function(value) {
    value = ko.unwrap(value);
    if (value == null) {
        return '<span class="text-danger">[无]</span>'
    } else {
        return value;
    }    
};

ko.filters.date = function(value) {
    value = ko.unwrap(value);
    if (value) {        
        var date = moment(value);
        return date.format('YYYY-MM-DD hh:mm:ss');
    }
};


(function(config) {    
    var addBinding = function(key, value) {
        bindingHandlers[key] = value;
        if (value.allowVirtual) {
            ko.virtualElements.allowedBindings[key] = true;
        }
    };

    var bindingHandlers = ko.bindingHandlers;
    _.forEach(config, function(value, key) {
        if (Array.isArray(value)) {
            addBinding(key, value[0])
            value[0].config(value[1]);
        }
        else {
            addBinding(key, value);
        }
    });
})({
    module: require('./binding-handler/module'),
    checkAll: require('./binding-handler/check-all'),
    delegateEvent: require('./binding-handler/delegate-event')
});