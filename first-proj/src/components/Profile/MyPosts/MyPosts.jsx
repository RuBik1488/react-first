import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <form action="">
                <textarea name="news" placeholder="your news..."></textarea>
                <button type="submit">Send</button>
            </form>
            <div className={styles.postsItem}>
                <Post message="Я имею первый пост" likes="100" />
                <Post message="Ты имеешь первый пост тоже" likes="34"/>
            </div>
        </div>
    )
}

export default MyPosts;