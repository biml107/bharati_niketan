 
 let border={};
 let borderPaid={};
 let numberOfBorder=0;
 let guest={};
 let guestPaid={};
 const guestMealCharge=40;
 
 const totalRent=5000;
 let totalBorderMeal=0;
 let totalGuestMeal=0;
 let mealcharge=0;
 let establish=0;
 let rentperhead=0;


  function submitBorderDetails(){
      document.getElementById("borderDetails").style.display="none";
  }
  function addGuest(){
    
      let guestDetail=document.createElement("li");
    guestDetail.innerHTML=` 
    <input placeholder="Name" type="text"/> 
    <input type="number"/><input type="number"/> <button onclick="saveGuestDetails(event)">save</button>
   `;

    document.getElementById("guestDetails").appendChild(guestDetail);
  }
   


  function saveDetails(){
   
      let inputBorderDetails=document.getElementById("borderDetails");
      let inputGuestDetails=document.getElementById("guestDetails");
      console.log(inputBorderDetails.children.length);
      for(let i=0;i<inputBorderDetails.children.length;i++)
      {
      console.log(inputBorderDetails.children[i].children[0].innerText);
      border[inputBorderDetails.children[i].children[0].innerText]=inputBorderDetails.children[i].children[1].value;
      borderPaid[inputBorderDetails.children[i].children[0].innerText]=inputBorderDetails.children[i].children[2].value;
      }
     

  }
  function saveGuestDetails(event){
  
      let currentGuest=event.target.parentNode;
       
      guest[currentGuest.children[0].value]=currentGuest.children[1].value;
      guestPaid[currentGuest.children[0].value]=currentGuest.children[2].value;
     
  }




  function calculate()
  {      
        
      let totalMarketing=eval(document.getElementById("inputMarketing").value);
     let totalGrocery=eval(document.getElementById("inputGrocery").value);
     let totalEstablish=eval(document.getElementById("inputEstablish").value);
  
      for(let key in border)
      {
        totalBorderMeal+=parseInt(border[key]);
        numberOfBorder++;
      
      }
      console.log(totalBorderMeal);
      console.log(totalEstablish);
  
  
      mealcharge=(totalGrocery+totalMarketing-(totalGuestMeal*guestMealCharge))/totalBorderMeal;
      establish=totalEstablish/numberOfBorder;
      
     rentperhead=totalRent/(numberOfBorder+1);
     
 
   for(let key in border )
   {  let currentExpenditure=rentperhead+establish+(mealcharge*parseInt(border[key]));
    console.log(Math.round(currentExpenditure));
  
      let candidate=document.createElement("tr");
      let name=document.createElement("td");
         name.innerText=key;
         candidate.appendChild(name);
      let meal=document.createElement("td");
      meal.innerText=border[key];
      candidate.appendChild(meal);
      let mealCharge=document.createElement("td");
      mealCharge.innerText=Math.round(mealcharge);
      candidate.appendChild(mealCharge);
      
       let estab=document.createElement("td");
      estab.innerText= Math.round(establish);
      candidate.appendChild(estab);
      let rent=document.createElement("td");
      rent.innerText=Math.round(rentperhead);
       candidate.appendChild(rent);
       let total=document.createElement("td");
       total.innerText=Math.round(currentExpenditure);
       candidate.appendChild(total);

      let paid=document.createElement("td");
          paid.innerText=borderPaid[key];
          candidate.appendChild(paid);
      let due=document.createElement("td");
       due.innerText=Math.round(currentExpenditure)-borderPaid[key];
       candidate.appendChild(due);
      document.getElementById("outputTable").appendChild(candidate);


   }

   for(let key in guest)
   {    let guestCandidate=document.createElement("tr");
       let name=document.createElement("td");
       name.innerText=key;
       guestCandidate.appendChild(name);
       let meal=document.createElement("td");
       meal.innerText=guest[key];
       guestCandidate.appendChild(meal);
   
     let total=document.createElement("td");
     total.innerText=guestMealCharge*parseInt(guest[key]);
     guestCandidate.appendChild(total);
     let paid=document.createElement("td");
     paid.innerText=guestPaid[key];
     guestCandidate.appendChild(paid);
      let due=document.createElement("td");
      due.innerText=guestPaid[key]-(guestMealCharge*parseInt(guest[key]));
      guestCandidate.appendChild(due);
     document.getElementById("guestOutputTable").appendChild(guestCandidate);
        
   }
  }





 
 

