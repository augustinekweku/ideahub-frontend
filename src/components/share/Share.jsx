import './share.css';
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    } from "@material-ui/icons";
import { useState, useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"

export default function Share() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e)=> {
        e.preventDefault();
        const newPost = {
            userId : user._id,
            desc : desc.current.value  
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error); 
            }
        }
        
        try {
            await axios.post("/posts", newPost);
            window.location.reload(); 
            
        } catch (error) {
            
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePic ? PF + user.profilePic : PF + "person/noAvatar.png"} alt=""/>
                    <input ref={desc} placeholder={"What's on your mind " + user.username + "?"} type="text" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions"> 
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input hidden type="file" id="file" accept=".png,jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button type="submit" className="shareButton">
                        Share
                    </button>
                </form>
            </div>
        </div>
    )
}
