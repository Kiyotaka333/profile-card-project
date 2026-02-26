
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
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}>{email}</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>{location}</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>{experience}</span>
        </div>
      </div>

      <button className={classes.button}>View More</button>
    </Card>
  );
}
