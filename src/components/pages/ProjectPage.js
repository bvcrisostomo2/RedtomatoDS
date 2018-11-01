import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Gallery from 'react-photo-gallery';

import sample from './collaterals.png';

// const PHOTO_SET = [
//     {
//         key: 1,
//         src: "https://res.cloudinary.com/doddfudab/image/upload/v1540190262/rtds_work/OMG-Logo-with-variations_dark-bottle-contents-09.jpg",
//         width: 5,
//         height: 3
//     },
//     {
//         key: 2,
//         src: "https://res.cloudinary.com/doddfudab/image/upload/v1540190262/rtds_work/Mashiso-Logo-20.jpg",
//         width: 1,
//         height: 1
//     },
//     {
//         key: 3,
//         src: "https://res.cloudinary.com/doddfudab/image/upload/v1540189931/rtds_work/Jessa-18th-Invi-2-04.jpg",
//         width: 1,
//         height: 1
//     },
//     {
//         key: 4,
//         src: "https://res.cloudinary.com/doddfudab/image/upload/v1540384868/rtds_work/MashisoTarpMockUp.jpg",
//         width: 5,
//         height: 6
//     }
// ];

// var clients = [
//     {
//         "client_id": 1,
//         "client_name": "Oil My Goodness",
//         "logo": "https://res.cloudinary.com/doddfudab/image/upload/v1540190262/rtds_work/OMG-Logo-with-variations_dark-bottle-contents-09.jpg",
//         "color": "rgb(171,211,186)",
//         "size": [250, 450]
//     },
//     {
//         "client_id": 3,
//         "client_name": "Mashiso",
//         "logo": "https://res.cloudinary.com/doddfudab/image/upload/v1540190262/rtds_work/Mashiso-Logo-20.jpg",
//         "color": "rgb(219, 97, 98)",
//         "size": [250, 450]
//     },
//     {
//         "client_id": 4,
//         "client_name": "MCK",
//         "logo": "https://res.cloudinary.com/doddfudab/image/upload/v1540385800/rtds_work/MCK-Fresh-Flowers-Logo-04.jpg",
//         "color": "rgb(171,211,186)",
//         "size": [250, 450]
//     },
//     {
//         "client_id": 5,
//         "client_name": "Jessa's Invitation",
//         "logo": "https://res.cloudinary.com/doddfudab/image/upload/v1540189931/rtds_work/Jessa-18th-Invi-2-04.jpg",
//         "color": "rgb(171,211,186)",
//         "size": [250, 450]
//     },
//     {
//         "client_id": 6,
//         "client_name": "Jessa's Invitation",
//         "logo": "https://res.cloudinary.com/doddfudab/image/upload/v1540189931/rtds_work/Jessa-18th-Invi-2-04.jpg",
//         "color": "rgb(171,211,186)",
//         "size": [250, 450]
//     },
//     {
//         "client_id": 7,
//         "client_name": "Jessa's Invitation",
//         "logo": "https://res.cloudinary.com/doddfudab/image/upload/v1540189931/rtds_work/Jessa-18th-Invi-2-04.jpg",
//         "color": "rgb(171,211,186)",
//         "size": [250, 450]
//     }
// ]

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
        }

        this.clickImage = this.clickImage.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:3000/clients').then(response =>{
            // console.log(response.data);
            this.setState({
            //   loading: false,
              clients: response.data,
            //   numberOfRecords: response.data.length
            })
        })
    }
    clickImage() {
        // console.log("image clicked");
        // alert("Hello");
        window.location = '/work/1';
    }
    render() {
        return(
            <div className="page-container"> 
                {/* <h1 className="page-header">OUR WORKS</h1> */}
                <div className="project-content">
                    <div className="project-item">
                        <Link to={'/work/omg'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540401409/rtds_work/OMGLogoMockup.jpg"} alt={'omg'} className="image" />
                            {/* <div className="overlay">
                                <div className="text"><h2>{'Oil My Goodness'}</h2></div>
                            </div> */}
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/mashiso'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540402218/rtds_work/MashisoLogoMockup.jpg"} alt={'mashiso'} className="image" />
                            {/* <div className="overlay">
                                <div className="text"><h2>{'Mashiso'}</h2></div>
                            </div> */}
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/mck'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540400341/rtds_work/MCKLogo_Mockup.jpg"} alt={'mck'} className="image" />
                            {/* <div className="overlay">
                                <div className="text"><h2>{'MCK'}</h2></div>
                            </div> */}
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/thai-chix'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540403678/rtds_work/ThaiChixLogoMockup.jpg"} alt={'thai_chix'} className="image" />
                            {/* <div className="overlay">
                                <div className="text"><h2>{'sample name'}</h2></div>
                            </div> */}
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/jessa18'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540407248/rtds_work/Jessa18thInvi-Mockup.jpg"} alt={sample} className="image" />
                            {/* <div className="overlay">
                                <div className="text"><h2>{'sample name'}</h2></div>
                            </div> */}
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/pwdo'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540479507/rtds_work/Stickers/PWDO2018-Logo-Mockup.jpg"} alt={sample} className="image" />
                            {/* <div className="overlay">
                                <div className="text"><h2>{'sample name'}</h2></div>
                            </div> */}
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/1'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540190262/rtds_work/Mashiso-Logo-20.jpg"} alt={sample} className="image" />
                            <div className="overlay">
                                <div className="text"><h2>{'sample name'}</h2></div>
                            </div>
                        </Link>
                    </div>
                    <div className="project-item">
                        <Link to={'/work/1'}>
                            <img src={"https://res.cloudinary.com/doddfudab/image/upload/v1540190262/rtds_work/Mashiso-Logo-20.jpg"} alt={sample} className="image" />
                            <div className="overlay">
                                <div className="text"><h2>{'sample name'}</h2></div>
                            </div>
                        </Link>
                    </div>
                    {/* <div
                        style={{
                            display: "block",
                            minHeight: "1px",
                            width: "100%",
                            overflow: "auto"}}
                    >
                        <Gallery photos={PHOTO_SET} onClick={this.clickImage} />
                    </div> */}
                    {/* <div className="wrapper"> */}
                    {
                        // clients.map((item) =>
                            
                        //     <div className="project-item">
                        //         <Link to={'/projects/'+item.client_id}>
                        //         <img src={item.logo} alt={sample} className="image" />
                        //         <div className="overlay" style={{backgroundColor:item.color}}>
                        //            <div className="text"><h2>{item.client_name}</h2></div>
                        //         </div>
                        //         </Link>
                        //     </div>
                            
                        // )
                    }
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default ProjectPage;