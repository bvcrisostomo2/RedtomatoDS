import React from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540479508/rtds_work/Stickers/FFC2017-ThrowbackMockup.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540479507/rtds_work/Stickers/PWDO2018-Logo-Mockup.jpg",
    width: 3,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540479509/rtds_work/Stickers/PWDO2018-Nametag-Mockup.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/doddfudab/image/upload/v1540479507/rtds_work/Stickers/KitStickerMockup.jpg",
    width: 5,
    height: 4
  }
];

class pwdo extends React.Component {
    handleCategory(cat) {
        return <Link to="/work" className="category-item"><li><i>{cat}</i></li></Link>;
    }
    render() {
        return(
            <div className="page-container">
                <h1 className="title">Philippine Web Designers Organization</h1>
                <ul className="category">
                    <Link to="/work/branding" className="category-item"><li><i>Stickers</i></li></Link>
                </ul>
                <Gallery photos={photos} />
            </div>
        );
    }
}

export default pwdo;