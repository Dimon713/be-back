export const GearPumpHydraPack = {
    id: "GearPumpHydraPack",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
        
        <div class="content content_v2 gear_pump">
            <h2>Шестеренный насос Hydra-Pack</h2>
            <div class="wrapper_preview">
            <img src="img/Spinner.svg" alt="loading" class="loading">
            </div>
            <div id="admin_panel" class="invisibility">
           <button id="signout-button" onclick="handleSignOutClick()">Выход</button>
           <button id="add">add</button>
           </div>
        </div>
        <div class="clear">
        </div>
    </div>
        </section>
      `;
    },
    init: () => {
        import ("../getAndViewGoods.js")
        .then(module => {
                new module.GetAndViewGoods("https://spreadsheets.google.com/feeds/list/1O-3EId-cgt_W8keu3oAdDINPjUf-QvYzNhwoBiDaNLg/od6/public/values?alt=json", "wrapper_preview", "GearPump")();
            })
            .catch(err => err)
        import ("../setApi.js")
        .then(module => {
            let handleClientLoad = module.handleClientLoad;
            let addGoods = module.addGoods;
            handleClientLoad("1O-3EId-cgt_W8keu3oAdDINPjUf-QvYzNhwoBiDaNLg", "GearPump");
            document.getElementById("signin-button").addEventListener("click", () => handleSignInClick());
            document.getElementById("add").addEventListener("click", () => addGoods("1O-3EId-cgt_W8keu3oAdDINPjUf-QvYzNhwoBiDaNLg", "GearPump"));
        })
    }
};