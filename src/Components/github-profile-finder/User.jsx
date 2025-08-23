
export default function User({user}) {
    const {
        avatar_url,
        name,
        login,
        html_url,
        created_at,
        followers,
        following
    } = user;

    const date = new Date(created_at);

    return (
        <>
            <img src={avatar_url} alt="avatar" />
            <h2 
                className="user-name" 
                onClick={()=> {window.open(html_url, "_blank")}}
                style={{margin: "0", cursor: "pointer"}}
            >
                {name || login}
            </h2>
            <div className="date-joined">
                Joined github on {date.getFullYear()}
            </div>
            <div className="follow">
                <div className="followers">Followers: {followers}</div>
                <div className="following">Following: {following}</div>
            </div>
        </>
    )
}