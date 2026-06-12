
const startDate = new Date('2026-05-11T00:00:00');

function updateCounter(){
 const now = new Date();
 const diff = now - startDate;

 const days = Math.floor(diff/(1000*60*60*24));
 const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
 const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

 document.getElementById('counter').innerHTML =
 `${days} dias, ${hours} horas e ${minutes} minutos`;
}

updateCounter();
setInterval(updateCounter,60000);
