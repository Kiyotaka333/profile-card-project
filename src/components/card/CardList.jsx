import CardItem from "./CardItem";
import userAvatarImg from "../../assets/images/tony.jpg";
import classes from "./CardList.module.css";

export default function CardList() {
  return (
    <div className={classes.listContainer}>
      <CardItem
        name="Raj"
        avatarImg={userAvatarImg}
        email="raj@gmail.com"
        location="ktm"
        experience="3 yrs"
        role="CEO"
      />
      <CardItem
        name="Ron"
        avatarImg={userAvatarImg}
        email="ron@gmail.com"
        location="china"
        experience="2 yrs"
        role="employee"
      />
      <CardItem
        name="Ram"
        avatarImg={userAvatarImg}
        email="ram@gmail.com"
        location="pokhara"
        experience="5 yrs"
        role="hero"
      />
      <CardItem
        name="Rak"
        avatarImg={userAvatarImg}
        email="rak@gmail.com"
        l0cation="America"
        experience="4 yrs"
        role="manager"
      />
    </div>
  );
}
