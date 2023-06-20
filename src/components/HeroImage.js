
import "./App.css";
const bgImage = new URL("../images/Liberty-StoryImage_2.jpg",import.meta.url);

function HeroImage() {

  return (
    <div >
      <img className= "Scenic1" src={bgImage} alt=""/>
     
    </div>
  );
} 

export default HeroImage;