require('./lib/avalon');
require('./lib/jquery');
//http://newc.yy.com/friend/bytag/9?callback=friendLiveCallback&dstr=friendLiveData&_=1468824990798

avalon.component('ms-button', {
    template: '<button type="button"><span><slot /></span></button>',
    defaults: {
        buttonText: "button"
    },
    soleSlot: 'buttonText'
})

avalon.component('ms-tabBox', {

    template: require('./template/tabBoxItem.tpl'),
    defaults: {
        content: ''
    }
});
avalon.component('ms-tabTitle', {
    template: require('./template/tabTitle.tpl'),
    defaults: {
        tabName: []
    }
})

var renderConfig = {
    $id: 'findPanelBox',
    testFor: ['a', 'b'],
    tabTitle:{
        is:'ms-tabTitle',
        tabName:['交友速配','ME直播','娱乐表演','游戏直播']
    },
    tabBox: {
        is: 'ms-tabBox',
        content: '',
        onInit: function () {
            var self = this;
            $.ajax({
                url: 'http://newc.yy.com/friend/bytag/',
                dataType: 'jsonp'
            }).then(function (res) {
                self.content = res.data
            })
        }
    }
}


var vm = avalon.define(renderConfig);



