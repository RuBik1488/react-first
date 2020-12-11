import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            {props.message}
            <div>{props.likes} Likes</div>
        </div>
    )
}
export default Post;