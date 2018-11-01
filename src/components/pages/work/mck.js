import React from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540406172/rtds_work/Business%20Collaterals/MCKBusiness-card-mockup.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540400341/rtds_work/Logo/MCKLogo_Mockup.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540480195/rtds_work/Posters/MCKPoster3-eMockup.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540409407/rtds_work/Posters/MCKPoster3-cMockup.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540409407/rtds_work/Posters/MCKPoster2-cMockup.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540409406/rtds_work/Posters/MCKPoster1-cMockup.jpg",
    width: 4,
    height: 4
  }
];

class mck extends React.Component {
    handleCategory(cat) {
        return <Link to="/work" className="category-item"><li><i>{cat}</i></li></Link>;
    }
    render() {
        return(
            <div className="page-container">
                <h1 className="title">MCK</h1>
                <ul className="category">
                    <Link to="/work/branding" className="category-item"><li><i>Branding</i></li></Link>
                    <Link to="/work/graphic-design" className="category-item"><li><i>Graphic Design</i></li></Link>
                    <Link to="/work/photography" className="category-item"><li><i>Photography</i></li></Link>
                </ul>
                <Gallery photos={photos} />
            </div>
        );
    }
}

export default mck;