import { HeaderComponents } from "../components/header.components";
import { NavigationComponents } from "../components/navigation.components";
import { CreateComponents } from "../components/create.components";
import { PostsComponents } from "../components/posts.components";
import { FavoriteComponents } from "../components/favorite.components";

new HeaderComponents("header");
const navigation = new NavigationComponents("navigation"),
        create = new CreateComponents("create"),
        posts = new PostsComponents("posts"),
        favorite = new FavoriteComponents("favorite");
