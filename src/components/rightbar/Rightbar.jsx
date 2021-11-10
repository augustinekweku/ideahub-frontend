import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> and 3 others have a birthday today.
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Active Friends</h4>
                    <ul className="rightbarFriendList">
                        {Users.map(u=>(
                            <Online key={u.id} user={u} />
                        ))}
                    </ul>
            
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User Info</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">Accra </span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Hometown: </span>
                    <span className="rightbarInfoValue">Accra </span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">Single </span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Mabel Watkins</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Derek Fisher</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Matt Bowman</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Gerald Houston </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Anna Mason</span>
                </div>
            </div>

            </>
            )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
