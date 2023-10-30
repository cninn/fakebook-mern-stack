import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RoomIcon from "@mui/icons-material/Room";
import CancelIcon from "@mui/icons-material/Cancel";




import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);


  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noprofile.png"
            }
            alt="..."
          />
          <input
            placeholder={`Ne düşünüyorsun ${user.username} ?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />

     

        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Fotoğraf yada Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                id="file"
                accept=".png,.jpeg,.jpg,.gif,.webp"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="shareOption">
              <BookmarkBorderIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Etiketle</span>
            </div>

            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Konum</span>
            </div>

            <div className="shareOption">
              <AddReactionIcon htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Duygu belirt</span>
            </div>
          </div>

          <button className="shareButton" type="submit">
            Paylaş
          </button>
        </form>
        {file && (
              <div className="shareImgContainer">
                <img className="shareImg" src={URL.createObjectURL(file)} alt="..." />
                <CancelIcon className="shareCancelImg" onClick={()=>setFile(null)}/>
              </div>
            )}

      </div>
    </div>
  );
}
