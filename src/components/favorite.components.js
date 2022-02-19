import { Component } from "../core/component";
import { apiService } from "../services/app.service";
import { renderPost } from "../templates/post.template";

export class FavoriteComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener("click", linkClickHandler.bind(this));
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        const html = renderList(favorites);
        this.$el.insertAdjacentHTML("afterbegin", html);
    }

    onHide() {
        this.$el.innerHTML = "";
    }
}

async function linkClickHandler(event) {
    console.log(event);
    event.preventDefault();

    if (event.target.classList.contains("js-link")) {
        const postId = event.target.dataset.id; // Укажем откуда нам взять заголовок
        this.$el.innerHTML = "";
        const post = await apiService.fetchPostById(postId);
      // console.log(post);

        this.$el.insertAdjacentHTML(
            "afterbegin",
            renderPost(post, { withButton: false })
        );
    }
}

function renderList(list = []) {
    if (list.length) {
        return `
                ${list
                    .map(
                    i =>
                    `<a href="#" class='js-link blur' data-id='${i.id}'>${i.title}</a>` // Укажем заголовок и соответствующие id
                    )
                    .join(" ")}
        `;
    } else {
        return `<p class="center">There is nothing here yet</p>`;
    }
}