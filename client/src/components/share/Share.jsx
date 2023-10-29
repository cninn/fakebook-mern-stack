import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RoomIcon from '@mui/icons-material/Room';
import AddReactionIcon from '@mui/icons-material/AddReaction';



export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
              <img className='shareProfileImg' src="/assets/person/person8.jpeg" alt="..." />
              <input placeholder='Ne düşünüyorsun Deniz ?' className="shareInput" />
        </div>
        <hr  className='shareHr'/>
        <div className="shareBottom">
          <div className="shareOptions">

            <div className="shareOption">
            <PermMediaIcon htmlColor='blue' className='shareIcon'/>
              <span className='shareOptionText'>Fotoğraf yada Video</span>
            </div>
            
            <div className="shareOption">
            <BookmarkBorderIcon htmlColor='tomato' className='shareIcon'/>
              <span className='shareOptionText'>Etiketle</span>
            </div>
            
            <div className="shareOption">
            <RoomIcon htmlColor='green' className='shareIcon'/>
              <span className='shareOptionText'>Konum</span>
            </div>
            
            <div className="shareOption">
            <AddReactionIcon htmlColor='gold' className='shareIcon'/>
              <span className='shareOptionText'>Duygu belirt</span>
            </div>

          </div>

        <button className="shareButton">
          Paylaş
        </button>

          </div>
      </div>
    </div>
  )
}
