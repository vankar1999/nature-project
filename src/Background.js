import image from "./Sharks.jpg";



function Background() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "repeat",
    }}>
      Hello from Pic
    </div>
  );
};



export default Background 



 
  // backgroundSize: "contain";
  // backgroundSize: "100%";
  // backgroundPosition: "center";
  // backgroundPositionX:"center";
  // backgroundPositionY:"center";