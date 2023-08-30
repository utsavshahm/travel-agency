import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
const slideImages = [
    {url:'image1.jpg'},
    {url:'image2.jpg'},
    {url:'image3.jpg'},
    {url:'image4.jpg'},
    {url:'image5.jpg'},
    {url:'image6.jpg'},
    {url:'image7.jpg'},
];

const divStyle = {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: "550px",
    backgroundSize: 'cover',
    width:'80%',
    margin:'50px auto',

}

function ImageSlider() {
return (
    <div>
        <Slide duration={1800}>
            {slideImages.map((image, index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage:`url(${image.url})`}}></div>
                </div>
                )
            )
            }
        </Slide>
    </div>
)
}
export default ImageSlider;
