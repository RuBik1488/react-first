import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={styles.headerImage}>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            <div className={styles.author}>
                <div className={styles.photo}>
                    <img src="https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png" alt=""/>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>RuBik R.</div>
                    <div className={styles.city}>Saransk</div>
                    <div className={styles.edu}>RPT Ruzaevka</div>
                    <div className={styles.web}>hisite.net</div>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;