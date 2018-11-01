import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import sample from './collaterals.png';

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            client: [],
            projects: []
        }
    }
    componentDidMount() {
        let pathSnippets = this.props.location.pathname.split('/');
        console.log(pathSnippets[2]);
        axios.all([
          axios.get('http://localhost:3000/clients/'+pathSnippets[2]),
          axios.get('http://localhost:3000/projects')
        ])
        .then(axios.spread((clientRes, imagesRes) => {
            console.log(clientRes.data);
            // console.log(imagesRes.data);
            this.setState({
              loading: false,
              client: clientRes.data,
              projects: imagesRes.data
            })
        }))
      }
    render() {
        return(
            <div className="page-container"> 
                <h1 className="page-header">OUR WORKS</h1>
                <h2>
                {
                    this.state.client.map((name) => name.client_name)
                }
                </h2>
                <h3>
                {
                    this.state.projects.map((item) => item.project_cat)
                }
                </h3>
                {
                    this.state.projects.map((item) => 
                        <div className="project-content">
                            <div className="project-item">
                                <img src='https://res.cloudinary.com/doddfudab/image/upload/v1540088409/rtds_work/label-group.png' alt={sample} height='auto' className="image" />
                            </div>
                        </div>
                    )
                }
                
            </div>
        );
    }
}

export default ProjectPage;