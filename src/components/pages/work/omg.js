import React from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540396794/rtds_work/OMG_Zeephora_BusinessCard-Mockup.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540401409/rtds_work/OMGLogoMockup.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540397891/rtds_work/OMG_LoyaltyCard-Mockup.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540396793/rtds_work/OMG_LoyaltyCard-Mockup.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540409958/rtds_work/Posters/OMG-Promo-MockUp.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540189767/rtds_work/OMG-Logo-Sticker-Mockup.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540479551/rtds_work/Sticker%20Labels/OMG-Herbs-Rosemary-Mockup.jpg",
    width: 4,
    height: 4
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540088409/rtds_work/label-group.png",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540479552/rtds_work/Sticker%20Labels/OMG-Henna-Mockup.jpg",
    width: 5,
    height: 2
  }
];

class omg extends React.Component {
    handleCategory(cat) {
        return <Link to="/work" className="category-item"><li><i>{cat}</i></li></Link>;
    }
    render() {
        return(
            <div className="page-container">
                <h1 className="title">Oil My Goodness</h1>
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

export default omg;