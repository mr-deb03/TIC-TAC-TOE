
function dis()
{
    document.querySelector("#login").style="display:none";
    document.querySelector("#main").style="display:block;";
}

var flag=true;
var states=[1,0,1,0,1,0,0,1,0];
var user1=0,user2=0;
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
        }

    }
    else
    {
        if(states[id] == 1 || states[id]== 0)
        {
            curDiv.innerHTML='O';
            states[id]='O';
            flag=!flag;
        }
    }
    checkWinner(!flag);
    console.log(states);
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
            winnerDiv.innerHTML=type?"Winner X !!!!! ":"winner O !!!!!";
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
        }   
    }
}

function gameRestart(){
    location.reload();
}

function setCount(type)
{
    (type)?user1++:user2++;
    document.querySelector("#user1").innerHTML=user1;
    document.querySelector("#user2").innerHTML=user2;
}