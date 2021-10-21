function check(array, ch){
    if(ch.length>1) return false;
    for(let i=0; i<array.length; i++){
        if(array[i]==ch) return false;
    }
    return true;
}

function strLin(g,maxi){
    let stri="";
    for(let k=0; k<(maxi-g)/2; k++) stri+=" ";
    stri+=""
}

function draw(shape, size, fuhao){
    let ind = -1;
    let str="";
    if(shape=="正方形"){
        for(let i=0; i<size; i++){
            for(let j=0; j<size; j++){
                ind++;
                if(ind>=fuhao.length) ind-=fuhao.length;
                str+=fuhao[ind];
            }
            str+="\n";
        }
    }else if(shape=="三角形"){
        for(let i=0; i<size; i++){
            for(let j=0; j<=i; j++){
                ind++;
                if(ind>=fuhao.length) ind-=fuhao.length;
                str+=fuhao[ind];
            }
            str+="\n";
        }
    }else if(shape=="菱形"){
        for(let i=1; i<=size; i+=2){
            for(let j=0; j<(size-i)/2;j++){
                str+=" ";
            }
            for(let j=1;j<=i;j++){
                ind++;
                if(ind>=fuhao.length) ind-=fuhao.length;
                str+=fuhao[ind];
            }
            for(let j=0; j<(size-i)/2;j++){
                str+=" ";
            }
            str+="\n";
        }
        if(size>=3){
            for(let i=size-2; i>=1; i-=2){
                for(let j=0; j<(size-i)/2;j++){
                    str+=" ";
                }
                for(let j=1;j<=i;j++){
                    ind++;
                    if(ind>=fuhao.length) ind-=fuhao.length;
                    str+=fuhao[ind];
                }
                for(let j=0; j<(size-i)/2;j++){
                    str+=" ";
                }
                str+="\n";
            }
        }
    }
    alert(str);
    return;
}

var fuhao = new Array();
let index = 0;
while(true){
    let input = prompt("请输入符号：(跳过请输入pass)");
    if(input==("pass")){
        if(index!=0) break;
        else alert("请输入至少一个符号！");
    }else{
        if(check(fuhao,input)){
            fuhao[index]=input;
            index++;
        }else alert("符号已出现或符号长度大于1！");
    }
}

while(true){
    let shape = prompt("请输入想要的图形：（正方形、三角形、或菱形）(结束输入pass)");
    if(shape!="正方形" && shape!="三角形" && shape!="菱形"){
        if(shape=="pass"){
            break;
        }
        alert("不支持输入图形！");
        continue;
    }
    let size;
    while(true){
        size = prompt("请输入大小：");
        if(size>10 || size<1){
            alert("图形大小不得小于1且不得超过10!");
            continue;
        }else{
            if(shape=="菱形"&&size%2==0){
                alert("菱形不支持偶数大小！");
                continue;
            }
            break;
        }
    }
    draw(shape,size,fuhao);

}
alert("感谢使用!\n--- by LXZ");