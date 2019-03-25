function show() {
    var show = document.getElementById("showContent");
    var content = document.getElementById("content");
    var x;
    switch (content.value) {
    case "<游戏>夏娃年代记":
        x = "1TcXPTWioI6rZureP_9B9tg";
        break;
    case "<开车>东方游乐园":
        x = "1R_PCFbBcpzViu-yIrS2tQQ";
        break;
    case "<游戏>尼尔·机械纪元":
        x = "1VAfouyuFRBKqxtBHLZ6PyQ";
        break;
    case "<漫画>东方本，君が来たら。":
        x = "1fm9CI8tueVFdBrnVC0n1SQ";
        break;
    default:
        x = "查无此项"
    }
    show.innerHTML = content.value + " : <br><br>https://pan.baidu.com/s/" + x;
    content.value = ""
}
