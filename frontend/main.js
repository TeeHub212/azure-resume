window.addEventListener('DOMContentLoaded', (Event) =>{
    getVisitCount();

})


const functionApi = '';

const getVisitCount - (){
    let count = 30;
    fetch(functionApi).then(response =>{
        reuturn response.json()
    }).then(response =>{
        console.log("website called function API.")
        count = response.count;
        document.getElementById("counter").innertext = count;
    }) .catch(function(error){
        console.log(error);
    
    
    });
    return count;



}