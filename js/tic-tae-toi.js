
function dis()
{
    user1=document.querySelector("#user1").value;
    user2=document.querySelector("#user2").value;
    if(user1=="" || user2=="")
    {
        alert("Please Fill User Name To Start The Game ");
    }
    else
    {
        document.querySelector("#login").style.display="none";
        document.querySelector("#main").style.display="block";
    }
    setName();
   // document.querySelector("#login").style="display:none";
   // document.querySelector("#main").style="display:block;";
}

var flag=true;
var states=[1,0,1,0,1,0,0,1,0];
var player1=0,player2=0;
var winnerDiv=document.querySelector("#winner");
document.querySelector(".row").addEventListener('click',function(e){
    if(e.target.id)
   setVal(e.target);
})

function setVal(curDiv)
{
    id=curDiv.id;
    if(flag)
    {
        if(states[id] == 1 || states[id] == 0)
        {
            curDiv.innerHTML='X';
            states[id]='X';
            flag=!flag;
            checkWinner(!flag);
        }

    }
    else
    {
        if(states[id] == 1 || states[id]== 0)
        {
            curDiv.innerHTML='O';
            states[id]='O';
            flag=!flag;
            checkWinner(!flag);
        }
    }
}

function setDisable()
{
    for(let i=0;i<states.length;i++)
    {
        if(states[i]==0 || states[i]==1)
        {
            states[i]=null;
        }
    }
}

var winIndexes=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner(type)
{
    /*
    if((states[0]==states[1] && states[1]==states[2]) ||(states[3]==states[4] && states[4]==states[5])||(states[6]==states[7] && states[7]==states[8]))
    {
        
        winnerDiv.innerHTML=type?"Winner X ":"winner O";
        setDisable();
    }
    else if((states[0]==states[3] && states[3]==states[6]) ||(states[1]==states[4] && states[4]==states[7])||(states[2]==states[5] && states[5]==states[8]))
    {
        winnerDiv.innerHTML=type?"Winner X":"winner O";
        setDisable();
    }
    else if((states[0]==states[4] && states[4]==states[8]) ||(states[2]==states[4] && states[4]==states[6]))
    {
        winnerDiv.innerHTML=type?"Winner X":"winner O";
        setDisable();
    }*/
    
    for(let x=0;x<winIndexes.length;x++)
    {
        let [a,b,c]=winIndexes[x];
        if(states[a]==states[b] && states[b]==states[c])
        {
            winnerDiv.innerHTML=type?user1+"  Winner!!!!! ":user2+"  Winner!!!!!  ";
            winnerDiv.style="display:block";
            setWinner(winIndexes[x]);
            setDisable();
            setCount(type);
            break;
        }
    }  
}

function setWinner(index)
{
    for(let i=0;i<index.length;i++)
    {
        document.getElementById(index[i]).style.backgroundColor="green";
    }
    
}

function gameReset()
{
    var check=confirm("Are you Sure To Reset The Game ?")
    if(check)
    {
        flag=true;
        states=[1,0,1,0,1,0,0,1,0];
        windiv=document.querySelectorAll(".row div");
        for(let i=0;i<windiv.length;i++)
        {
            windiv[i].innerHTML="";
            windiv[i].style.backgroundColor="transparent";
            winnerDiv.innerHTML="";
           winnerDiv.style="display:none";
        }   
    }
}

function gameRestart(){
    var checkin=confirm("Are you Sure To Reset The Game ?")
    if(checkin)
    {
    location.reload();
    }
}

function setCount(type)
{
    console.log(type);
    (type)?player1++:player2++;
    document.querySelector("#play1").innerHTML=player1;
    document.querySelector("#play2").innerHTML=player2;
}

function setName(){
    document.querySelector("#pname1").innerHTML=user1+": ";
    document.querySelector("#pname2").innerHTML=" "+user2+": ";
}