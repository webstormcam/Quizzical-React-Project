import blue_blob from "./assets/Blue_Blob.png"
import yellow_blob from "./assets/Yellow_Blob.png"


function First(){
   return (
    <main>
        <img className="blue-blob" src={blue_blob} alt=" a blue blob in the corner" />
        <div className="start-text"></div>
        <img className="yellow-blob" src={yellow_blob} alt="a yellow blob in the corner" />
    </main>
   )
}

export default First