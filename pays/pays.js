var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all',true);
req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
       if(req.status == 200){
        //console.log(req.responseText);
        var data = JSON.parse(req.responseText)

        var Ullist = document.getElementById('listul');
        var listepays = document.getElementById('secondList');

          let input = document.getElementById('test');
          input.addEventListener('keyup', letrepays);
          
          let  newTab = [];
          newTab = data;

          function letrepays(){
            let input = document.getElementById('test');
            listepays.innerHTML = ""
             for( let i =0; i < newTab.length; i++){
            

               if(newTab[i].name.indexOf(input.value) === 0){
                  var monli = document.createElement('li');
                  monli.innerHTML = newTab[i].name;
                  listepays.appendChild(monli);                  
                  listepays.className = 'list-group';
                  monli.className = 'list-group-item';

                monli.onclick = () => {
                  input.value = newTab[i].name;
                  listepays.innerHTML = "" 
                  let mydiv = document.getElementById('divpays');
                  let div2 = document.createElement("div")
                  let paragraphe = document.createElement('p'); 
                  paragraphe.innerHTML = `<img src="${newTab[i].flag}"/>` 
                  div2.appendChild(paragraphe); 
                  let paragraphe1 = document.createElement('p'); 
                  paragraphe1.innerHTML = `La population de ${newTab[i].name} est de ${newTab[i].population} habitants`
                  div2.appendChild(paragraphe1); 
                  let paragraphe2 = document.createElement('p'); 
                  paragraphe2.innerHTML = `Sa capital est ${newTab[i].capital}` 
                  div2.appendChild(paragraphe2); 
                  let paragraphe3 = document.createElement('p'); 
                  paragraphe3.innerHTML = `Sa monaie est le ${newTab[i].currencies[0].name}`
                  div2.appendChild(paragraphe3); 
                  let paragraphe4 = document.createElement('p'); 
                  paragraphe4.innerHTML = `Ce pays est situé en ${newTab[i].region}, plus précisément en ${newTab[i].subregion}` 
                  div2.appendChild(paragraphe4);
                  div2.className = ('divjs'); 
                  mydiv.prepend(div2); 
                  console.log('Thomas');

                  /*let paysTab = [flag,  capital, currencies, region, sub-region]; */
                  
                }
            
                    
                  
         

                  /* console.log(newTab[i].name); */
                }  
             }
             input.value.toUpperCase();
             /* console.log('------------') */
          }

/*         for (var i =0; i < data.length; i++) {
         var list = document.createElement('li');
         list.innerHTML = data[i].name;

         Ullist.appendChild(list);
         list.className = 'btn btn-outline-secondary';

         var monli = document.createElement('li');
         monli.innerHTML = data[i].name;
         listepays.appendChild(monli);


         listepays.className = 'list-group';
         monli.className = 'list-group-item';

       
        
        }  */

         
      

        
 
       } 
    
    }
  };

  req.send(null); 