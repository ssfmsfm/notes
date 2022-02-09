import { Component } from "../core/component"

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);

        this.tabs = [];
    }

    init() {
        this.$el.addEventListener("click", tabClickHandler.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;
    }
}

function tabClickHandler(e) {

    e.preventDefault();

    if (e.target.classList.contains("tabs__item")) {
        Array.from(this.$el.querySelectorAll(".tabs__item"))
        .forEach( tab => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");

        // const ACTIVE_TAB = this.tabs.find( tab => {
        //     return tab.name === e.target.dataset.name;
        // }).component;

        // for (let {component} of this.tabs) {
        //     component.hide();
        //     if (component == ACTIVE_TAB) {
        //         component.show();
        //     }
        // }

        const ACTIVE_TAB = this.tabs.find( tab => {
            return tab.name === e.target.dataset.name;
        });

        this.tabs.forEach(tab => {
            tab.component.hide();
        })
        ACTIVE_TAB.component.show();
    }
}