function MyFunction(){
    document.getElementById("Err").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    if (isNaN(x) && isNaN(y)){
        return document.getElementById("Err").innerHTML = "Số thứ nhất và thứ hai nhập sai";
    }
    else {
        if (isNaN(x)){
            return document.getElementById("Err").innerHTML = "Số thứ nhất nhập sai";
        }
        if (isNaN(y)){
            return document.getElementById("Err").innerHTML = "Số thứ hai nhập sai";
        }
    }
    var c = document.getElementsByName("operator")
    var op
    for (op = 0; op < c.length; op++){
        if (c[op].checked){
            break;
        }
    }
    switch (op){
        case 0:
            x = Number(x);
            y = Number(y);
            return document.getElementById("result").innerHTML = x + y;
            break;
        case 1:
            return document.getElementById("result").innerHTML = x - y; 
            break;
        case 2:
            return document.getElementById("result").innerHTML = x * y;
            break;
        case 3:
            if (y == 0)
            {
                return document.getElementById("Err").innerHTML = "Số thứ hai là 0, không thể chia được.";
            }
            return document.getElementById("result").innerHTML = x / y;
            break;
        default:
            return document.getElementById("Err").innerHTML = "Chưa chọn phép tính.";
            break;
    }
}