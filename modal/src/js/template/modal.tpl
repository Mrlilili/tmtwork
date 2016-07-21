<div class="modal-mask"  ms-visible="@isShow" ms-effect="{is:'modal'}">
    <div class="modal-box">
        <div class="modal-header">
            <h3>{{@title}}</h3>
            <i class="icon-collapse-alt icon-large modal-close" ms-click="@cbProxy(false)"></i>
        </div>
        <div class="modal-body">
            <slot name="content"></slot>
        </div>
        <div class="modal-footer">
            <button class="btn" ms-click="@cbProxy(false)">取 消</button>
            <button class="btn btn-primary" ms-click="@cbProxy(true)">确 定</button>
        </div>
    </div>
</div>