<div id="tabsTitle">
    <div class="left">
        <span class="title">推荐视频</span>
        <ul class="tabs">
            <li class="tabsItem"  ms-for="el in @tabName">{{el}}</li>
        </ul>
        <slot name="test" />
    </div>
    <!--<div class="right">更多精彩</div>-->
</div>