import { useState } from "react";
import axios from "axios";
import Gallery from "./galary";

const Snapshot = () => {
    const [apiData, setApiData] = useState("");
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");
  function mountainGallery(){
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=317a7dddfa228163aefa6613e4bd3c18&gallery_id=72157646472797634&format=json&nojsoncallback=1"
      )
      .then((res) => {
        setApiData(res.data.photos.photo)
        setTitle("Mountain Pictures");
      });
  }
  function foodGallery(){
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=317a7dddfa228163aefa6613e4bd3c18&gallery_id=72157649599148925&format=json&nojsoncallback=1"
      )
      .then((res) => {
        setApiData(res.data.photos.photo)
        setTitle("Food Pictures");
      });
  }

  function birdsGallery(){
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=317a7dddfa228163aefa6613e4bd3c18&gallery_id=72157720697202794&format=json&nojsoncallback=1"
      )
      .then((res) => {
        setApiData(res.data.photos.photo)
        setTitle("Birds Pictures");
      });
  }

  function beachGallery(){
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=317a7dddfa228163aefa6613e4bd3c18&gallery_id=72157719748270585&format=json&nojsoncallback=1"
      )
      .then((res) => {
        setApiData(res.data.photos.photo)
        setTitle("Beach Pictures");
      });
  }

  return (
    <div>
      <div>
        <h1>SnapShot</h1>
      </div>
      <div>
        <input type={"search"} placeholder={"Search..."} value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </div>
      <div>
        <button onClick={mountainGallery}>Mountain</button>
        <button onClick={beachGallery}>Beaches</button>
        <button onClick={birdsGallery}>Birds</button>
        <button onClick={foodGallery}>Food</button>
      </div>
      <div>
        {
            JSON.stringify(apiData[0])
        }
        <Gallery value={apiData} header={title} item={search} />
      </div>
    </div>
  );
};

export default Snapshot;
