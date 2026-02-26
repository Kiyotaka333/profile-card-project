import CardItem from './CardItem';
import userAvatarImg from '../../assets/images/tony.jpg';
import classes from './CardList.module.css';

export default function CardList(){
 return(
    <div className={classe.listContainer}> 
        <CardItem name="Raj"  avatarImg={userAvatarImg}/>
        <CardItem name="Ram" avatarImg={userAvatarImg}/>
         <CardItem name="Rak" avatarImg={userAvatarImg}/>
          <CardItem name="Ron" avatarImg={userAvatarImg}/>
    </div>
 );
}