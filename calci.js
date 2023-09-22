let ip=document.getElementById("inputfield");
console.log(ip);
let total=document.querySelectorAll("button");

arr=Array.from(total);
let s=""
arr.forEach(element => {
    element.onclick=function()
    {
        
        if(element.innerHTML=='c')
        {
            s=" ";
            ip.value=s
        }
        else if(element.innerHTML=='d')
        {
            s = s.slice(0, -1);
        ip.value = s
        }
        else if(element.innerHTML=='sqrt')
        {
            let x=parseInt(s)
           
            ip.value=Math.sqrt(x);
        }
        else if(element.innerHTML=='=')
        {
            s=eval(s)
            ip.value=s;
        }
        else{
                  s=s+element.innerHTML
                  ip.value=s;
        }
    };
    
});
