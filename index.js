fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(json => {
   json.forEach(element => {
      var y=document.createElement('li') ;
      var content=`<div class="card" style="width:400px">
        <img class="card-img-top image" src="xxx" alt="card image">
         <div class="card-body">
            <h4 class="card-title">yyy</h4>
            <p class="card-text">zzz</p>
            <a href="#" class="btn btn-primary">see profile</a>
         </div>
        </div>
        `
    var test=content.replace("xxx",element.flag);  
    test=test.replace("yyy",element.name);   
    test=test.replace("zzz",element.capital + '   ' +  element.population + ' / ' + element.area + ' / ' + element.region);
    y.innerHTML=test;
    y.className="list-group-item";
    document.getElementById('besho').appendChild(y); 

   });

  })
