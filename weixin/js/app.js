    $("#uls>li").on("click", function () {
            $(this).children().addClass("bg").parent().siblings().children().removeClass("bg")
        });
        var pullDown = $("#pullDown"),
            pullUp = $("#pullUp"),
            pullDownLabel = $("#pullDownLabel"),
            pullUpLabel = $("#pullUpLabel"),
            loadingStep = 0;
            pullDown.hide();
        var myScroll = new IScroll("#content", {
            probeType: 2
        });
        myScroll.on("scroll", function () {
            if (this.y > 40) {
                pullDown.show();
                pullDown.addClass('refresh');
                pullDownLabel.text("松手刷新数据");
            }
            else if (this.y < (this.maxScrollY - 20)) {
                pullUp.show();
                pullUp.addClass('loading');
                pullUpLabel.text("正在载入");
            }
            loadingStep = 1;
        });
        myScroll.on("scrollEnd", function () {
            if (pullDown.attr('class').match('refresh') && loadingStep == 1) {
                pullDown.removeClass('refresh');
                pullDownAction();
                pullDownLabel.text("刷新中..");
            } else if (pullUp.attr('class').match('loading') && loadingStep == 1) {
                pullUp.removeClass('loading');
                pullUpLabel.text("加载中..");
                pullUpAction();
            }
        });
        function pullDownAction(){ 
          setTimeout(function(){  
                var num=Math.ceil(Math.random()*3);
                var num1=Math.floor(Math.random()*3);
                var num2=Math.floor(Math.random()*3);
                var arr=["么么哒","棒棒哒","美美哒"];
                var arr1=['曹先生因肤色太black,从而轻生',"为何我眼中常含泪水",'三万高薪']
                var dls="<dl class='row'>"+
                    "<dt class='col-xs-2'>"+"<img src='images/"+num+".png'>"+"</dt>"+
                    "<dd class='col-xs-10'>"+"<p>"+arr[num1]+"</p><span>"+arr1[num2]+"</span>"+"</dd>"+
                    "</dl>";
                    $('#ff').prepend($(dls));
                    myScroll.refresh();
                    loadingStep = 0; 
                    pullDown.hide();
                    },1000)
        }
        function pullUpAction() {
              setTimeout(function(){ 
                var num=Math.ceil(Math.random()*3);
                var num1=Math.floor(Math.random()*3);
                var num2=Math.floor(Math.random()*3);
                var arr=["么么哒","棒棒哒","美美哒"];
                var arr1=['曹先生因肤色太black,从而轻生',"为何我眼中常含泪水",'三万高薪']
                var dls="<dl class='row'>"+
                    "<dt class='col-xs-2'>"+"<img src='images/"+num+".png'>"+"</dt>"+
                    "<dd class='col-xs-10'>"+"<p>"+arr[num1]+"</p><span>"+arr1[num2]+"</span>"+"</dd>"+
                    "</dl>";
                    $('#dd').append($(dls));
                    myScroll.refresh();
                    loadingStep = 0;
                    pullUp.hide();
                 },1000)
              }
        document.addEventListener('touchmove', function (e) {
                     e.preventDefault();
        }, false);