export function renderPost(post, options = {}) {
    const tag =
        post.type === "news"
        ? "News"
        : "Notes";

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const candidate = favorites.find(p => p.id === post.id);

    const button = candidate
        ? `<button class="add-favorite button" data-id="${post.id}" data-title="${post.title}">REMOVE FAVORITE</button>`
        : `<button class="add-favorite button" data-id="${post.id}" data-title="${post.title}">ADD FAVORITE</button>`;

    return `
        <div class="post blur">

            <header class="post-header">
                <h1 class="post-title">
                    ${post.title}
                </h1>
                <span class="post-type">
                    ${tag}
                </span>
            </header>

            <p class="post-text">
                ${post.fulltext}
            </p>

            <footer class="post-footer">
                <span class="post-date">
                    ${post.date}
                </span>
                ${options.withButton ? button : " "}
            </footer>

        </div>
    `;
}