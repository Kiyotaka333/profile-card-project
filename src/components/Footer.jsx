import classes from './Footer.module.css';
function Footer(){
    const data =new Data();
    const currentYear=data.getFullYear();
    return <footer className={classes.footer}>Copyright{currentYear}</footer>;
}

export default Footer;
