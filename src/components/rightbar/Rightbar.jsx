import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Rightbar({user}) {
    console.log("user info", user)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (error) {
                console.log(error)
            }
        }
        getFriends();
    }, [user._id])

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}gift.png`} alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> and 3 others have a birthday today.
                    </span>
                </div>
                <img src={`${PF}ad.png`} alt="" className="rightbarAd"/>
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
                    <span className="rightbarInfoKey">City:  </span>
                    <span className="rightbarInfoValue">{user.city ? user.city : "Not Set"} </span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Hometown: </span>
                    <span className="rightbarInfoValue">{user.from ? user.from : "Not Set"} </span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Not Set"}</span> 
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                {friends.map(friend=>(
                    <Link to={"/profile/" + friend.username} style={{textDecoration: "none"}}>
                    <div className="rightbarFollowing">
                    <img src={friend.profilePic ? PF + friend.profilePic : PF + "/person/noAvatar.png"} alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">{friend.username}</span>
                    </div>
                    </Link>
                    ))}
            </div>

            </> 
            )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
