var avalon = require('./lib/avalon');
require('../css/style.scss')

avalon.component('ms-modal', {
    template: require('text!./template/modal.tpl'),
    defaults: {
        title: 'modal',
        isShow: true
    }
})