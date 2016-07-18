<div id="tabBox">
    <div class="item" ms-for="(index,el) in @content|limitBy(8)">

        <div class="imgBox">
            <img ms-attr="{src:el.thumb}" alt="">
        </div>
        <div class="infoBox">
            <p>{{el.title}}</p>
            <p><span>开播:{{el.liveTime}}分钟</span><span>在线:{{el.users}}</span></p>
        </div>
    </div>
</div>