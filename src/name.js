const names = document.getElementById("name")


function handler(child) {
    child.addEventListener("mouseover", () => {

        if (child.classList.contains("after")) {
            
            setTimeout(() => {
                console.log("test")
            }, 200);
        }
    })
}



for (let i = 0; i < names.children.length; i++) {
    const child = names.children[i];
    
    child.addEventListener("mouseover", handler(child))
}