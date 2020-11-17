import React, { Component } from 'react';
import {getAllPictures} from './api';
import Image from './Image'
class Pictures extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [],
        }
    }
    getPictures = () => {
        getAllPictures(this.props.searchQuery)
            .then((response) => {
                let pictures = [];
                for (let i=0; i<9; i++) {
                    pictures.push(response.data.data[i].images.downsized.url);
                }
                this.setState({
                    pictures: pictures,
                });
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };
    render() {
        const images = this.state.pictures.map((picture, index) => {
            return <Image im={picture} />;
        });
        return (
            <div>
                <input type="text" onChange={this.props.onChange} placeholder="Seach"></input>
                <button onClick={this.getPictures}>Get Gify</button>
                <div>
                    {images}
                </div>
            </div>
        );
    }
}
export default Pictures;