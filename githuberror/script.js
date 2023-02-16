const nextBtn=document.getElementById("load_next");
const prevBtn=document.getElementById("load_prev");

let currentPage=1

function getissue(currentPage){
    fetch(`https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5 `)
    .then(res => res.json())
    .then(data =>{
        const view=document.getElementById("view")
        view.innerHTML=""
        data.forEach(issue =>{
            const issueTitle=issue.title;
            const issueItem=document.createElement("li");
            issueItem.textContent=issueTitle;
            view.appendChild(issueItem)
        })
        const pageHeading=document.getElementById("updatepage")
        pageHeading.textContent=`page Number:${currentPage}`
    })
}
document.addEventListener("DOMContentLoaded",()=>{
    getissue(currentPage);
    nextBtn.addEventListener("click",()=>{
        currentPage++;
        getissue(currentPage);
    })
    prevBtn.addEventListener("click",()=>{
        if(currentPage >1){
            currentPage--;
            getissue(currentPage)
        }
    })
})