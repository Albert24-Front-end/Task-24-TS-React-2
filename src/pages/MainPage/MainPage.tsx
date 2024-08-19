import { List, Navbar, WhatsNew, History, Post_liked_marked, Post_Repost_liked_marked } from "../../components";
// import "./MainPage.scss";
import { SCMainPage } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <SCMainPage>
      <aside className="LeftSide">
        <Navbar/>
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        <WhatsNew/>
        <History/>
        <Post_liked_marked/>
        <Post_Repost_liked_marked/>
      </main>
      <aside className="RightSide">
      <List listType="closeFriends"/>
      <List listType="music"/>
      </aside>
    </SCMainPage>
  );
};
