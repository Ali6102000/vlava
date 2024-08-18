fetch('http://localhost:3000/services')
      .then(response => response.json())
      .then(json => {
        let services=document.getElementById("services");
        json.forEach(element => {
            let content=document.createElement("div");
            content.innerHTML=
            `  <div class="col-md-6 icon-box position-relative">
                       <i class="${element.icon}"></i>
                       <h4><a href="" class="stretched-link">${element.title}</a></h4>
                       <p>${element.text}</p>
                     </div>  `  ;
         
            services.appendChild(content);
            console.log(element.icon);
                  
            
        });
      }
      
      )






 
      