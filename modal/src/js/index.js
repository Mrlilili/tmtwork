/**
 * Created by admin-b on 2016/7/21.
 * fas
 */
var avalon = require('./lib/avalon');
require('./component/modal');


avalon.define({
    $id: 'test',
    show: function () {
        this.config.isShow = true;
    },
    config: {
        isShow: false,
        onCancel: function () {
            alert('cancel');
        },
        onOk: function () {
            alert('ok');
        },

        title: '这是测试'
    }
})