import React from "react";
import Unsplash from "../API/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []}

    onSearchSubmit = async(term) => {
      const Response = await Unsplash.get('/search/photos', {
            params: { query: term},
        })
        console.log((Response).data.results);
        this.setState({images: Response.data.results})
    }
    render () {
        return (
            <div className="ui container" style={{marginTop: '10px',}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;