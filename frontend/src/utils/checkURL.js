export function checkURLHorL(){
    const location = document.location.hostname;
    
    if(location === "timm184.sg-host.com"){
        return("/frontend/");
    } else{
        return("/");
    }
}