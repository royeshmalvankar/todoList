let mf=document.querySelector('form');
let in1=document.getElementById('task');
let in2=document.getElementById('priority');
let tb=document.querySelector('tbody');

let alld=[];

mf.addEventListener('submit',function(e)
{
    e.preventDefault();
    let d={};
    d.task=in1.value;
    d.priority=in2.value;
    alld.push(d);
    console.log(alld);
    tb.innerText=""
    alld.map((ele)=>
    {
        let trow=document.createElement('tr');
        let tdoc1=document.createElement('td');
        let tdoc2=document.createElement('td');
        if(ele.priority==="High")
        {
            tdoc2.style.backgroundColor="red"
        }
        else
        {
            tdoc2.style.backgroundColor="green"
        }
        tdoc1.innerText=ele.task;
        tdoc2.innerText=ele.priority;

        trow.append(tdoc1,tdoc2);
        tb.append(trow);
 

    })



})