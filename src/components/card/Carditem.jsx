
import Card from './Card';
import classes from './CardItem.module.css';

export default function CardItem({name, avatarImg, email, location, experience,role}) {
  return (
    <Card>
      <div className={classes.header}>
        <img
          className={classes.avatar}
          src={avatarImg}
          alt="profile avatar"
        />

        <div className={classes.userInfo}>
          <h2 className={classes.name}>{name}</h2>
                <h2 className={classes.role}>{role}</h2>
          <p className={classes.role}>Frontend developer</p>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}>{email}</span>
          <span>raj@gamil.com</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>{location}</span>
          <span>Kathmandu, Nepal</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>{experience}</span>
          <span>3 Years</span>
        </div>
      </div>

      <button className={classes.button}>View More</button>
    </Card>
  );
}
