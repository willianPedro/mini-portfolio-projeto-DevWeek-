const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        const tabSelect = document.querySelector(".tab.select");
        tabSelect.classList.remove("select");
        tab.classList.add("select");

        const infoSelect = document.querySelector(".info.select");
        infoSelect.classList.remove("select")


        const idElementInfoTab = `info-${tab.id}`

        const infoShow = document.getElementById (idElementInfoTab)
        infoShow.classList.add ("select")
    });
})