function iClock(){
        var x1 = 50;
        var y1 = 50;　　　　　　　　　　　　　　　　　　　　　　　 //时钟圆心位置
        var c = document.getElementById("can");
        var ca = can.getContext("2d");

        c.width = 100;
        c.height = 100;　　　　　　　　　　　　　　　　　　　　　　//画布大小


        setInterval(function() {
            ca.clearRect(0, 0, 100, 100);
            rtime(x1, y1);
        },50);　　　　　　　　　　　　　　　　　　　　　　　　　　　　//让时钟走起来

        function rtime(x, y) {
            var da1 = new Date();
            var h = parseInt(da1.getHours());
            var m = parseInt(da1.getMinutes());
            var s = parseInt(da1.getSeconds());　　　　　　　　//获取系统时间

            var h1 = (h * 30 - 90 + m / 2) * Math.PI / 180;
            var m1 = (m * 6 - 90) * Math.PI / 180;
            var s1 = (s * 6 - 90) * Math.PI / 180;　　　　　　//转化为函数所需要的弧度

            ca.beginPath();
            ca.lineWidth = 4;
            ca.arc(x, y, 47, 0, 2*Math.PI);
            ca.stroke();　　　　　　　　　　　　　　　　　　　　　　//绘制表盘

            ca.lineWidth = 1;
            ca.font = "18px";
            ca.strokeText("12",x-9, y-50);
            ca.strokeText("6",x-3, y+60);
            ca.strokeText("9",x-60, y+5);
            ca.strokeText("3",x+55, y+5);　　　　　　　　　　　　//绘制数字

            ca.beginPath();
            ca.lineWidth = 3;
            ca.lineCap="round";
            ca.moveTo(x,y);
            ca.arc(x, y, 25, h1, h1);
            ca.strokeStyle = '#cbb745';
            ca.stroke();　　　　　　　　　　　　　　　　　　　　　　//绘制时针

            ca.beginPath();
            ca.lineWidth = 2.5;
            ca.lineCap="round";
            ca.moveTo(x,y);
            ca.arc(x, y, 35, m1, m1);
            ca.strokeStyle = '#cbb745';
            ca.stroke();　　　　　　　　　　　　　　　　　　　　　　//绘制分针

            ca.beginPath();
            ca.lineWidth = 2;
            ca.lineCap="round";
            ca.moveTo(x,y);
            ca.arc(x, y, 40, s1, s1);
            ca.strokeStyle = '#cbb745';
            ca.stroke();　　　　　　　　　　　　　　　　　　　　　　//绘制秒针
        }
    }
