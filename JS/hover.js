export function submitHover(){
    $(".submitButton").mouseenter(function(element){
        $(".submitButton").css({color:"white",borderColor:"white",transition:"all .5s"})
        
    })
    $(".submitButton").mouseleave(function(){
        $(".submitButton").css({color:"red",borderColor:"red",transition:"all .5s"});
    }) 
}