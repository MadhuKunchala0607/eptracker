var add=document.getElementById("btn")
var sum=0
var obj={food:0,medical:0,transport:0}
add.addEventListener("click",()=>{
    var title=document.getElementById("title").value 
    var amount=document.getElementById("amount").value
    var date=document.getElementById("date").value 
    var category=document.getElementById("cate").value 
    var para=document.createElement("p")
    var tot=document.getElementById("total")
    var del=document.createElement("button")

   obj[category]+=Number(amount)
   console.log(obj)
   
    del.addEventListener("click",()=>{
        obj[category]-=Number(amount)
   console.log(obj)
        sum-=Number(amount)
        tot.innerText=sum

        
    
        document.body.removeChild(para)
         update()

    })


    sum+=Number(amount)
    console.log(sum)

    del.innerText="delete"
    tot.innerText=sum
    para.className="expense-item"
    para.innerText=`${title}-- $${amount} -- ${date} --${date} --${category}`

  

    para.appendChild(del)
    document.body.appendChild(para)
     update()

})
function update(){
    var t=obj.food+obj.transport+obj.medical

    var foodP=obj.food/t*100
    var medicalP=obj.medical/t*100
    var transportP=obj.transport/t*100

    var chart=document.getElementById("pie")
    chart.style.backgroundImage=`conic-gradient(
     orange 0% ${foodP}%,
     blue   ${foodP}% ${foodP+medicalP}%,
     pink  ${foodP+medicalP}% 100%
    
    )`;

}
// update()