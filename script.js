let tablinks=document.querySelectorAll(".tablinks")

tablinks.forEach(function (val){
    val.addEventListener("click", function(){
        let dataVal = this.dataset.tab
        let tabContent= document.querySelector(`#${dataVal}`)

        let allTabContent = document.querySelectorAll(".tabContent")
        tablinks.forEach(function(value){
            value.classList.remove("active")
        })
        allTabContent.forEach(function(val){
            val.style.display="none"
        })

        tabContent.style.display="block"
        this.classList.add("active")
    })
})

document.querySelector(".tablinks").click()
