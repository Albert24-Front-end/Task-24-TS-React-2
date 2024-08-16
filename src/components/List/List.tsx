import Heading from "../typography/Heading/Heading";
import ListItem from "./ListItem";
import {listData} from "./Data"

const { subscribes, closeFriends, music } = listData

interface ListProps {
  listType: "subscribes" | "music" | "closeFriends";
  isOnline?: boolean;
  isActive?: boolean;
}

const List =({listType}: ListProps)=>{
  const renderList =()=> {
  switch (listType) {
    case "subscribes":
    return (
      <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Подписки"/>
            <span className="count">
              {subscribes ? subscribes.length : ""}
            </span>
          </div>
          {subscribes && subscribes.map((userElem) => (
            <ListItem
            imgUrl={userElem.imgUrl}
            alt={userElem.alt}
            mainText={userElem.mainText}
            secondaryText={userElem.secondaryText}
            badgeNumber={userElem.badgeNumber}/>
          ))}
        </div>
    )
    case "music":
    return (
      <div className="MusicBlock">
          <div className="MusicBlock__title">
          <Heading variant="h2" text="Вы недавно слушали"/>
            <span className="count">{music ? music.length : ""}</span>
          </div>
          {music && music.map((musicElem)=>(
            <ListItem
            imgUrl={musicElem.imgUrl}
            alt={musicElem.alt}
            mainText={musicElem.mainText}
            secondaryText={musicElem.secondaryText}
            isActive={musicElem.isActive}
            />
          ))}
        </div>
    )

    case "closeFriends":
    return (
      <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Близкие друзья"/>
            <span className="count">
              {closeFriends ? closeFriends.length : ""}
            </span>
          </div>
          {closeFriends && closeFriends.map((userElem) => (
            <ListItem
            isOnline={userElem.isOnline}
            imgUrl={userElem.imgUrl}
            alt={userElem.alt}
            mainText={userElem.mainText}
            secondaryText={userElem.secondaryText}
            badgeNumber={userElem.badgeNumber}/>
          ))}
        </div>
    )
    default:
    break;
  }}
    return renderList()
};
export default List