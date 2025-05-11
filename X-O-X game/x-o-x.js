 let button=document.querySelectorAll(".btn");
 let heading=document.querySelector("h3")
 let e=true;
 let heading2=document.querySelector("h4")
 let str=new Array(3);
 for(let i=0;i<str.length;i++){
    str[i]=new Array(3).fill("")
 }
 let reset=document.getElementById("reset")
 let r=2;
 let c=2;
 let i;
 let j;
 let count=""
 let col=""
 let gameover=false
 heading2.style.visibility="hidden"
 reset.style.visibility="hidden"

 button.forEach((ele)=>{
    ele.onclick=(evt)=>{
        let id=evt.target.id;
        i=Number(id[0]);
        j=Number(id[1]);
        if(gameover==true){
            return
        }
        if(str[i][j]!==""){
            return;
        }
        if(e==true){
            ele.innerText="X"
            str[i][j]="X";
            e=false;
           
        }else{
            ele.innerText="O"
            str[i][j]="O"
            e=true
        }
        checkwinner(str)
    
    }
    
});
reset.onclick=()=>{
    button.forEach((btn)=>{
        btn.innerText="" 
        btn.style.backgroundColor=""
        btn.style.color=""
        
        
    });
    heading.innerText="X--O--X"
    heading.style.color="black"
    heading2.style.visibility="hidden"
    e=true
    gameover=false
    for(let i=0;i<=r;i++){
        for(let j=0;j<=c;j++){
            str[i][j]=""
        }
    }
};
function checkwinner(val){
     for(let i=0;i<=r;i++){
        for(let j=0;j<=c;j++){
            
            if(val[i][j]=="X"){
                count+=val[i][j];
            
            }
            if(val[i][j]=="O"){
                count+=val[i][j];
            
            }
            if(count=="XXX" || count=="OOO"){
                reset.style="none"
                heading.style.color="green"
                heading.innerText="Winner is "+count[0]
                gameover=true
                heading2.style="none"
                heading2.innerText="Do you want a new game?"
                for(let i=0;i<=r;i++){
                    col=0;
                    if(str[i][col]=="X"&&str[i][col+1]=="X"&&str[i][col+2]=="X"){
                        for(let j=0;j<=c;j++){
                            document.getElementById(`${i}${j}`).style.backgroundColor="red"
                            document.getElementById(`${i}${j}`).style.color="white"
                        }
                        if(j==c){
                            l=1
                            count=""
                            return
                        }
                    }  
                    if(str[i][col]=="O"&&str[i][col+1]=="O"&&str[i][col+2]=="O"){
                        for(let j=0;j<=c;j++){
                            document.getElementById(`${i}${j}`).style.backgroundColor="red"
                            document.getElementById(`${i}${j}`).style.color="white"
                        }
                        if(j==c){
                            l=1
                            count=""
                            return
                        }
                    }  
                }
                
            }
            
        }
        count=""
    }
     count="";
    for(let j=0;j<=c;j++){
        for(let i=0;i<=r;i++){
            if(val[i][j]=="X" || val[i][j]=="O"){
                count+=val[i][j];
                
            }
        }
        if(count=="XXX" || count=="OOO"){
            reset.style="none"
            heading2.style="none"
            heading2.innerText="Do you want a new game?"
            heading.style.color="green"
            heading.innerText="Winner is "+count[0];
            gameover=true
            for(let col=0;col<=r;col++){
                i=0;
                if(str[i][col]=="X"&&str[i+1][col]=="X"&&str[i+2][col]=="X"){
                    for(let j=0;j<=c;j++){
                        document.getElementById(`${j}${col}`).style.backgroundColor="red"
                        document.getElementById(`${j}${col}`).style.color="white"
                    }
                    if(j==c){
                        count=""
                        col=""
                        return
                    }
                }
                if(str[i][col]=="O"&&str[i+1][col]=="O"&&str[i+2][col]=="O"){
                    for(let j=0;j<=c;j++){
                        document.getElementById(`${j}${col}`).style.backgroundColor="red"
                        document.getElementById(`${j}${col}`).style.color="white"
                    }
                    if(j==c){
                        count=""
                        col=""
                        
                        return
                    }
                }
            }
            
        }
        count="";
     }
     for(let j=0;j<=c;j++){
        for(let i=j;i<=j;i++){
            if(val[i][j]=="X"){
                count+=val[i][j]
            }
            if(val[i][j]=="O"){
                count+=val[i][j]
            }
            if(count=="XXX" || count=="OOO"){
                heading2.style="none"
                heading2.innerText="Do you want a new game?"
                reset.style="none"
                heading.style.color="green"
                heading.innerText="Winner is "+count[0];
                gameover=true
                if(str[0][0]=="X"&&str[1][1]=="X"&&str[2][2]=="X"){
                    for(let j=0;j<=c;j++){
                        document.getElementById(`${j}${j}`).style.backgroundColor="red"
                        document.getElementById(`${j}${j}`).style.color="white"
                    }
                    if(j==c){
                        count=""
                        return
                    }
                }
                if(str[0][0]=="O"&&str[1][1]=="O"&&str[2][2]=="O"){
                    for(let j=0;j<=c;j++){
                        document.getElementById(`${j}${j}`).style.backgroundColor="red"
                        document.getElementById(`${j}${j}`).style.color="white"
                    }
                    if(j==c){
                        count=""
                        return
                    }
                }
                 
                 
            }
        }
        
        
    }
    count=""
   for(let j=c;j>=0;j--){
      for(let i=2-j;i<=2-j;i++){
        if(val[i][j]=="X"){
            count+=val[i][j]
          }
          if(val[i][j]=="O"){
            count+=val[i][j]
          }
          if(count=="XXX" || count=="OOO"){
            heading2.style="none"
            heading2.innerText="Do you want a new game?"
            reset.style="none"
            heading.style.color="green"
            heading.innerText="Winner is "+count[0]
            gameover=true
            if(str[0][2]=="X"&&str[1][1]=="X"&&str[2][0]=="X"){
                for(let j=0;j<=c;j++){
                    document.getElementById(`${j}${j=2-j}`).style.backgroundColor="red"
                    document.getElementById(`${j}${j=2-j}`).style.color="white"
                }
                if(j==c){
                    count=""
                    return
                }
            }
            if(str[0][2]=="O"&&str[1][1]=="O"&&str[2][0]=="O"){
                for(let j=0;j<=c;j++){
                    document.getElementById(`${j}${j=2-j}`).style.backgroundColor="red"
                    document.getElementById(`${j}${j=2-j}`).style.color="white"
                }
                if(j==c){
                    count=""
                    return
                }
            }
             
          }
       }
   
   }
    count=""
}
    

