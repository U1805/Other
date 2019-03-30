function show() {
    var show = document.getElementById("showContent");
    var content = document.getElementById("content");
    var x;
    switch (content.value) {
    case "<工具>Adobe之PS+Ae+Pr":
        x = "1MyzGyr4wOMbYdZQfyPG6IQ";
        break;
    case "<游戏>夏娃年代记":
        x = "12QUYNWgASJmgNwdqTIvhcA";
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
        x = ""
    }
if (x == "")
  {
  show.innerHTML = "查无此项";
  }
else
  {
  show.innerHTML = content.value + " : <br><br>https://pan.baidu.com/s/" + x;
  }
    content.value = ""
}
