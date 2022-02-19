import { Component } from "../core/component";
import { apiService } from "../services/app.service";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../templates/post.template";


export class PostsComponent extends Component {
    constructor(id, { loader }) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.$el.addEventListener("click", buttonHandler.bind(this));
    }

    async onShow() {
        const fbData = await apiService.fetchPost();

        const posts = TransformService.fbObjectToArray(fbData);

        const html = posts.map(post => renderPost(post, { withButton: true }));
        this.$el.insertAdjacentHTML("afterbegin", html.join(" "));
    }

    onHide() {
        this.$el.innerHTML = "";
    }
}

function buttonHandler(event) {
    const $el = event.target;
    const id = $el.dataset.id;
    const title = $el.dataset.title;

    if(id) {
        // console.log(id);

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        console.log(favorites);
        const candidate = favorites.find(p => p.id === id);

        if(candidate) {
            $el.textContent = "ADD FAVORITE";
            favorites = favorites.filter(p => p.id !== id);
        } else {
            $el.textContent = "REMOVE FAVORITE";
            favorites.push({id, title});
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}
