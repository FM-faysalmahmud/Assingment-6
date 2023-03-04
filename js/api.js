const loadToolsHandler = async (toolsHandler) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayItems(data.data.tools);
};

const displayItems = (id) => {
  // console.log(tools.name);
  const toolsContainer = document.getElementById("tool-container");

  id.forEach((ids) => {
    console.log(ids);
    const toolDiv = document.createElement("div");
    toolDiv.classList.add("col");
    toolDiv.innerHTML = `
          <div class="card h-100">
                <img src="${ids.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                  <p class="card-text">
                    <p>1. ${ids.features[0]}</p>
                    <p>2. ${ids.features[1]}</p>
                    <p>3. ${ids.features[2]}</p>
                  </p>
                </div>

                <div class="card-footer">
         <div class="col"><small class="fw-bold fs-6 ">${ids.name}</small></div>
        <div class="col"><i class="fa-solid fa-calendar-days text-muted "></i> ${ids.published_in}</div>
         <div class="d-flex align-items-end flex-column mb-2">


         <button onclick="loadPhoneDetails(${ids.description})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-solid fa-arrow-right "></i>
        </button>
        

           
           
          
        
       
          
   </div>
     </div>
      
    `;
    toolsContainer.appendChild(toolDiv);
  });
};
loadToolsHandler();
