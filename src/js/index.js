import { HeaderComponent } from "../components/header.components";
import { NavigationComponent } from "../components/navigation.components";
import { CreateComponent } from "../components/create.components";
import { PostsComponent } from "../components/posts.components";
import { FavoriteComponent } from "../components/favorite.components";
// import { LoaderComponent} from "../component/loader.components";


new HeaderComponent("header");
const navigation = new NavigationComponent("navigation"),
        // loader = new LoaderComponent("loader"),
        create = new CreateComponent("create"),
        favorite = new FavoriteComponent("favorite"),
        posts = new PostsComponent("posts");


navigation.registerTabs([
        {name: "posts", component: posts},
        {name: "create", component: create},
        {name: "favorite", component: favorite}
]);