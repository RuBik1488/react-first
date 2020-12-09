const Profile = () => {
    return (
        <div className="main">
            <div className="main__header-img">
                <img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt=""/>
            </div>
            <div className="main__author">
                <div className="main__author-photo">
                    <img src="https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png" alt=""/>
                </div>
                <div className="main__author-info">
                    <div className="main__author-name">RuBik R.</div>
                    <div className="main__author-city">Saransk</div>
                    <div className="main__author-edu">RPT Ruzaevka</div>
                    <div className="main__author-web">hisite.net</div>
                </div>
            </div>
            <div className="main__posts">
                <h3>My posts</h3>
                <form action="">
                    <textarea name="news" placeholder="your news..."></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;