// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
let input=document.getElementById('inputfeild');
let img=document.getElementById('code');
let btn=document.getElementById('generate');



function generate(){
    
    if (input.value=="")
    { alert("input an text");
    img.src="";
    }
    else{
        let data=input.value;
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=+${data}`;
    img.src=url;
       }
    }
    
