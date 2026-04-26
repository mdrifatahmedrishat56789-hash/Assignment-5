const loading = document.getElementById("loading")

const allIssue = ()=>{
    loading.style.display = "flex";
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res=> res.json())
    .then(data => {
        displayIssue(data.data)
        loading.style.display = "none";
    })
}

const createElement = (arr) =>{
    const htmlElement = arr.map((el)=> `<span class="bg-yellow-400  text-xs rounded-xl p-1 text-red-700">${el}</span>`)
    return htmlElement.join("  ");
}



const displayIssue = (issueCards)=>{
    const issueCard = document.getElementById("issueCard")
    issueCard.innerHTML = ""
     
    issueCards.forEach(card=>{
        
             const displayCard = document.createElement("div")
        displayCard.innerHTML = `<div class="bg-white p-4 h-full rounded-xl border-t-2 ${card.status === "open" 
            ? "border-t-green-500" : "border-t-yellow-600"} space-y-3">
            <div class="flex justify-between">
               ${card.status === "open" 
  ? `<img src="./assets/Open-Status.png" alt="">` 
  : `<img src="./assets/Closed- Status .png" alt="">`
}
                <p class="bg-[#EF4444] text-red text-xs rounded-2xl p-1 text-white">${card.priority}</p>
            </div>

            <div class="space-y-2">
                <h3 class="text-xs md:text-xl font-bold ">${card.title}</h3>
                <p class="text-[#64748B]">${card.description}</p>
                <div class="flex gap-2">
                    <p>${createElement(card.labels)}</p>
                    
                </div>
                <hr>
                <p>#1 ${card.assignee}</p>
                <p>${card.createdAt}</p>
            </div>
        </div>`

        issueCard.appendChild(displayCard)
        })       
}



allIssue()
