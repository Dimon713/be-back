import {
    HomePage
} from "./modules/HomePage.js"

import {
    About
} from "./modules/About.js"

import {
    Gallery
}
from "./modules/Gallery.js"

import {
    Suppliers
} from "./modules/Suppliers.js"

import {
    Contacts
} from "./modules/Contacts.js"

import {
    EngineeringHydraulicSystems
} from "./modules/EngineeringHydraulicSystems.js"

import {
    EngineeringPowerPack
} from "./modules/EngineeringPowerPack.js"

import {
    ProductionPowerPack
} from "./modules/ProductionPowerPack.js"

import {
    HydraulicsDiagnostics
} from "./modules/HydraulicsDiagnostics.js"

import {
    ServiceCenter
} from "./modules/ServiceCenter.js"

import {
    Hydrofication
} from "./modules/Hydrofication.js"

import {
    PumpMotor
} from "./modules/PumpMotor.js"

import {
    GearPumpHydraPack
} from "./modules/GearPumpHydraPack.js"

import {
    AxialPumpHydraPack
} from "./modules/AxialPumpHydraPack.js"

import {
    Valve
} from "./modules/Valve.js"

import {
    DirectionalValve
} from "./modules/DirectionalValve.js"

import {
    HydraulicsAccessories
} from "./modules/HydraulicsAccessories.js"

import {
    Accumulator
} from "./modules/Accumulator.js"

import {
    Radiators
} from "./modules/Radiators.js"

import {
    Filters
} from "./modules/Filters.js"

import {
    ErrorPage
} from "./modules/ErrorPage.js"

import {
    ShoppingCart
} from "./modules/ShoppingCart.js"

import {
    amountGoodsInCart
} from "./amountGoodsInCart.js"

// List of components (from components.js)
const components = {
        header: Header,
        nav: Nav,
        content: Content,
        footer: Footer,
    }
    // List of supported routes (from pages.js)
const routes = {
    main: HomePage,
    about: About,
    gallery: Gallery,
    suppliers: Suppliers,
    contacts: Contacts,
    shopping_cart: ShoppingCart,
    default: HomePage,
    engineering_hydraulic_systems: EngineeringHydraulicSystems,
    engineering_power_pack: EngineeringPowerPack,
    production_power_pack: ProductionPowerPack,
    hydraulics_diagnostics: HydraulicsDiagnostics,
    service_center: ServiceCenter,
    hydrofication: Hydrofication,
    pump_motor: PumpMotor,
    gear_pump_hydra_pack: GearPumpHydraPack,
    axial_pump_hydra_pack: AxialPumpHydraPack,
    valve: Valve,
    directional_valve: DirectionalValve,
    hydraulics_accessories: HydraulicsAccessories,
    accumulator: Accumulator,
    radiators: Radiators,
    filters: Filters,
    error: ErrorPage,
};

/* ----- spa init module --- */
const mySPA = (function() {

    /* ------- begin view -------- */
    function ModuleView() {
        let myModuleContainer = null;
        let menu = null;
        let contentContainer = null;
        let routesObj = null;

        this.init = function(container, routes) {
            myModuleContainer = container;
            routesObj = routes;
            menu = myModuleContainer.querySelector("#nav");
            contentContainer = myModuleContainer.querySelector("#middle");
        }

        this.renderContent = function(hashPageName) {
            let routeName = "default";

            if (hashPageName.length > 0) {
                routeName = hashPageName in routes ? hashPageName : "error";
            }
            window.document.title = routesObj[routeName].title;
            contentContainer.innerHTML = routesObj[routeName].render(`${routeName}-page`);
            this.updateButtons(routesObj[routeName].id);
            if (routesObj[routeName].init) {
                routesObj[routeName].init();
            }
        }

        this.updateButtons = function(currentPage) {
            const menuLinks = document.querySelectorAll(".mainmenu__link");
            for (let i = 0, menuLinksCount = menuLinks.length; i < menuLinksCount; i++) {
                if (currentPage === menuLinks[i].getAttribute("href").slice(1) && currentPage !== "main") {
                    menuLinks[i].classList.add("active");
                } else {
                    menuLinks[i].classList.remove("active");
                }
            }
        }
    };
    /* -------- end view --------- */
    /* ------- begin model ------- */
    function ModuleModel() {
        let myModuleView = null;

        this.init = function(view) {
            myModuleView = view;
        }

        this.updateState = function() {
            const hashPageName = window.location.hash.slice(1).toLowerCase();
            myModuleView.renderContent(hashPageName);
        }
    }

    /* -------- end model -------- */
    /* ----- begin controller ---- */
    function ModuleController() {
        let myModuleContainer = null;
        let myModuleModel = null;

        this.init = function(container, model) {
            myModuleContainer = container;
            myModuleModel = model;

            // вешаем слушателей на событие hashchange и кликам по пунктам меню
            window.addEventListener("hashchange", this.updateState);

            this.updateState(); //первая отрисовка
        }

        this.updateState = function() {
            myModuleModel.updateState();
        }
    };
    /* ------ end controller ----- */

    return {
        init: function(container, routes, components) {
            this.renderComponents(container, components);
            amountGoodsInCart();

            const view = new ModuleView();
            const model = new ModuleModel();
            const controller = new ModuleController();

            //связываем части модуля
            view.init(document.getElementById(container), routes);
            model.init(view);
            controller.init(document.getElementById(container), model);
        },

        renderComponents: function(container, components) {
            const root = document.getElementById(container);
            for (let item in components) {
                if (components.hasOwnProperty(item)) {
                    root.innerHTML += components[item].render();
                }
            }
        },
    };
}());
/* ------ end app module ----- */
/*** --- init module --- ***/

mySPA.init("spa", routes, components);

function x(){
    
}