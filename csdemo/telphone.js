(function(window,undefined){

    var prefix= function(){
        var _elementStyle = document.createElement('div').style;
        var vendors = ['msT','MozT', 'webkitT', 't'],
            transform,
            i = 0,
            l = vendors.length;
        for ( ; i < l; i++ ) {
            transform = vendors[i] + 'ransform';
            if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
        }
        return false;
    } ();

    function Scroll(opts){
        this.scrollElem = opts.scrollElem,
            this.scrollCon = opts.scrollCon,
            this.scrollwp = opts.scrollwp,
            this.CH = opts.scrollCon.offsetHeight - opts.scrollwp.offsetHeight,
            this.moveDis = 0,
            this.touchbool = false;
        this.init();
    }
    Scroll.prototype = {
        constructor:"Scroll",
        tweenmove:function(dis){
            var self = this;
            self.scrollCon.style.cssText = "-"+prefix+"-transform:translateY("+dis+"px) translateZ(0);-"+prefix+"-transition:-"+prefix+"-transform 0.2s linear";
        },
        move:function(dis){
            var self = this;
            self.scrollCon.style.cssText = "-"+prefix+"-transform:translateY("+dis+"px) translateZ(0)";
        },
        init:function(){
            var _this = this,moveY,touchY;
            _this.scrollElem.addEventListener("touchstart",function(e){
                var e = e || window.event,
                    touch=e.touches[0];
                e.preventDefault();
                touchY = touch.pageY;
                _this.touchbool = true;
                if(e.target.className.replace(/^\s$/g,"") == "close"){
                    tip.style.display = "none";
                    mask.style.display = "none";
                }
            },false);
            _this.scrollElem.addEventListener("touchmove",function(e){
                var e = e || window.event;
                e.preventDefault();
                if(_this.touchbool){
                    var touch=e.touches[0];
                    moveY = touch.pageY;
                    if(moveY-touchY+_this.moveDis < 20 && moveY-touchY+_this.moveDis >(-_this.CH-20) ){
                        _this.move(moveY-touchY+_this.moveDis);
                    }
                }
            },false);
            _this.scrollElem.addEventListener("touchend",function(e){
                _this.moveDis = moveY-touchY+_this.moveDis;
                if(_this.moveDis>=0){
                    _this.tweenmove(0);
                    _this.moveDis = 0;
                }else if(_this.moveDis <= -_this.CH){
                    _this.tweenmove(-_this.CH);
                    _this.moveDis = -_this.CH;
                }
                _this.touchbool = false;
            },false);
        }
    }
    window.Scroll = Scroll;
    var tipa = document.getElementById("tipa"),
        close = document.querySelector(".close"),
        tip = document.querySelector(".main_venue_tip"),
        scrollwp = document.querySelector(".main_v_tcon"),
        scrollCon = document.querySelector(".scroll_con"),
        mask = document.querySelector(".mask");

    var scroll = new Scroll({
        scrollElem : tip,
        scrollwp : scrollwp,
        scrollCon : scrollCon
    })

    tipa.addEventListener("click",function(){
        tip.style.display = "block";
        mask.style.display = "block";
        scroll.CH = scrollCon.offsetHeight - scrollwp.offsetHeight;
    },false);

})(window)