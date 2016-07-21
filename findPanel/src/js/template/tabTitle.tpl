<div id="tabsTitle">
    <div class="left">
        <span class="title">推荐视频</span>
        <ul class="tabs">
            <li class="tabsItem" ms-click="@switchFuc(index)" ms-for="(index,el) in @tabName" ms-attr="{dataType:index}">{{el}}</li>
        </ul>
    </div>
    <div class="right">更多精彩</div>
</div>