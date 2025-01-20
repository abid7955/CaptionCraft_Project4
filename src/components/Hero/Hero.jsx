import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <div className="main">
      <div className="secOne">
        <div className="secOneOne">
          <h1>
            "Crafting Captions <br /> One Click at a Time"
          </h1>
          <h3>Effortlessly get the caption for your next photo</h3>
          <div className="buttonOne mt-6">
            <a href="/generate"><p className="btnp">Generate Caption</p>
            <p>No Signup Required</p></a>
          </div>
        </div>
        <div className="vecOne">
          <img srcSet={assets.vecOne} />
        </div>
      </div>
      <div className="line"></div>
      <div className="secTwo">
        <h1>How CaptionCraft Works</h1>
        <div className="mid">
          <div className="midOne">
            <img className="vec" srcSet={assets.vecThree} />
            <h3>Upload Image</h3>
            <p>Simply upload an image, any extension, does not affect us!</p>
          </div>
          <i className="fa-solid fa-arrow-right"></i>
          <div className="midOne">
            <img className="vec" srcSet={assets.vecFour} />
            <h3>Personalized Caption</h3>
            <p>
              Our algorithm will provide with an ideal caption for your image
            </p>
          </div>
          <i className="fa-solid fa-arrow-right"></i>
          <div className="midOne">
            <img className="vec" srcSet={assets.vecFive} />
            <h3>Save or Share</h3>
            <p>Save the caption in a text file or share it on social media</p>
          </div>
        </div>
        <div className="buttonOne">
        <a href="/generate"><p className="btnp">Generate Caption</p>
          <p>No Signup Required</p></a>
        </div>
      </div>
      <div className="line"></div>
      <div className="secThree">
        <h1>Benefits of CaptionCraft</h1>
        <div className="last">
          <img srcSet={assets.vecTwo} />
          <div className="cont">
            <p className="m-2">
              <b>Automated Captions:</b> Save time with AI-generated captions
              that perfectly describe your images in seconds.
            </p>
            <p className="m-2">
              <b>Creative Tag Suggestions:</b>
              Boost engagement with relevant and trending tags tailored to your
              photos.
            </p>
            <p className="m-2">
              <b>Easy to Use:</b>
              Simply upload your images, and let CaptionCraft handle the rest—no
              technical skills required!
            </p>
            <p className="m-2">
              <b>Built-in Gallery: </b>
              Our in house gallery along with our enhanced search lets you
              search the image you want in one go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
