//fetch services api
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

      //fetch aboutus api

fetch('http://localhost:3000/aboutUs')
      .then(response => response.json())
      .then(json => {
        let aboutUs=document.getElementById("aboutUs");
        json.forEach(element => {
            let content=document.createElement("div");
            content.innerHTML=
            `   <div class="col-lg-3 col-md-6">
            <div class="stats-item d-flex align-items-center w-100 h-100">
              <i class="${element.icon}"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="${element.end}" data-purecounter-duration="1" class="purecounter"></span>
                <p>${element.p}</p>
              </div>
            </div>
          </div> `  ;

        
         
            aboutUs.appendChild(content);
            console.log(element.icon);
                  
            
        });
      }
      
      )









 
      