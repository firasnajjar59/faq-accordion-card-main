let p=document.querySelectorAll('.right>div>p');
console.log(p)

for(let i=0;i<p.length;i++){
    p[i].setAttribute("id",`p${i}`);
    if(i%2==0){
    p[i].setAttribute("onclick",`openCard('p${i}','p${i+1}')`);
    }
}


let openCard =(id,id2)=>{
    let iDone=document.getElementById(id);
    console.log(iDone)
    let iDtwo=document.getElementById(id2);
    console.log(iDtwo)
    console.log(iDone.hasAttributes("class","activeH1"))
    let result=iDone.getAttribute("class","activeH1");
    console.log(result)
    if(result!=null){
        iDone.removeAttribute("class");
        iDtwo.setAttribute("class","hidden");
        console.log("in if")

    }else{
        for(let i=0;i<p.length;i++){
            let deleteClass=document.getElementById(`p${i}`)
            if(i%2==0){
                deleteClass.removeAttribute("class");
            }else{
                deleteClass.setAttribute("class","hidden");
            }

        }
        iDone.setAttribute("class","activeH1");
        iDtwo.removeAttribute("class"); 
    }
}