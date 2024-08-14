interface ListItemProps {
    imgUrl: string;
    alt: string;
    mainText: string;
    secondaryText: string;
    badgeNumber?: number | null;
    isOnline?: boolean;
    isActive?: boolean;
}
const ListItem =({imgUrl, alt, mainText, secondaryText, badgeNumber, isOnline, isActive}: ListItemProps)=>{
    return(
        <div className="UserElem">
            <img src={imgUrl} alt={alt} />
            <div className="user__description">
              <p className="main__text">{mainText}</p>
              <p className={`secondary_text ${isOnline == true ? "online" : ""}`}>{secondaryText}</p>
            </div>
            <span className={`${badgeNumber !==null ? "Badge": ""}`}>{badgeNumber}</span>
            <div className={`plus-button ${isActive ? 'active' : ''}`} ></div>
          </div>
    );
};
export default ListItem;