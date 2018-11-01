import React from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540405954/rtds_work/MashisoTarpMockUp2.jpg",
    width: 5,
    height: 5
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540402218/rtds_work/MashisoLogoMockup.jpg",
    width: 3,
    height: 3
  }
];

class mashiso extends React.Component {
  render() {
    return(
        <div className="page-container">
            <h1 className="title">Mashiso</h1>
            <ul className="category">
                <Link to="/work/branding" className="category-item"><li><i>Branding</i></li></Link>
                <Link to="/work/branding" className="category-item"><li><i>Graphic Design</i></li></Link>
            </ul>
            <Gallery photos={photos} />
        </div>
    );
  }
}

export default mashiso;