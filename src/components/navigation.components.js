import { Component } from "../core/component"

export class NavigationComponents extends Component {
    constructor(id) {
        super(id);

        this.tabs = [];
    }

    init() {
        this.$el.addEventListener("click", tabClickHandler.bind(this));
    }
}

function tabClickHandler(e) {

    e.preventDefault();

    if (e.target.classList.contains("tabs__item")) {
        Array.from(this.$el.querySelectorAll(".tabs__item")).forEach( tab => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
    }

}