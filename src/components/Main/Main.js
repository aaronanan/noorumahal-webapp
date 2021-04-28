import React from "react";
import Dosa from "../../assets/dosa.png";
import DosaLG from "../../assets/dosaog.jpg";
import Restaurant from "../../assets/restaurant.jpg";
import "./Main.css";
import MediaQuery from "react-responsive";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

var items = [
  {
    name: "“Sensational”",
    description:
      "Food is tasty. Lamb kurma is sensational and beef curry has better cuts of beef than many Indian places. Not much fatty meat with this place.",
  },
  {
    name: "“Everything was awesome!”",
    description:
      "I love the food here, I am never disappointed whenever I stop by. Highly recommend this place if you are looking for some good Tamil food. Oh, and the String Hoppers and Sambal are amazing, and I’ve never had better Sambar elsewhere.",
  },
  {
    name: "“Best Kothu roti in town!”",
    description:
      "So this is one of my family’s favourite restaurants because 1) they offer the best Kothu Roti in town, 2) friendly service and 3) they have one of my family’s beloved foods – Kothu Roti :).",
  },
];
function Item(props) {
  return (
    <div class="row justify-content-center align-items-center reviews-box">
      <div class="col-12 col-lg-6">
        <Paper class="text-center">
          <h2 class="review-header">{props.item.name}</h2>
          <p class="review-text">{props.item.description}</p>
        </Paper>
      </div>
    </div>
  );
}
const Main = () => {
  return (
    <>
      <div
        class="container-fluid main-top"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <MediaQuery minWidth={599}>
          <div class="row">
            <div class="container-image">
              <img
                src={Dosa}
                width="100%"
                style={{ filter: "brightness(70%)" }}
              />
              <div class="centered">
                <p class="main-text">
                  Authentic <br /> Indian Cusine
                </p>
                <p class="sub-text">Elegant falvours and traditional dishes.</p>
                <button type="button" class="btn-main">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={599}>
          <div class="row" style={{ height: "400px" }}>
            <div class="container-image">
              <img
                src={DosaLG}
                width="100%"
                height="400px"
                style={{ filter: "brightness(80%)" }}
              />
              <div class="centered">
                <p class="main-text" style={{ width: "300px" }}>
                  Authentic Indian Cusine
                </p>
                <p class="sub-text">Elegant falvours and traditional dishes.</p>
                <button type="button" class="btn-main">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </MediaQuery>

        <div
          class="row justify-content-center align-items-center"
          id="about"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <div className="col-lg-4 p-25">
            <h3 class="about-h3">About Us</h3>
            <h1 class="about-h1">
              OUR STORY <br />
            </h1>
            <p class="about-p">
              Nooru Mahal is a Vancouver, British Columbia based restaurant
              serving South Indian, Sri Lankan and Singaporean Cuisine. We have
              been operating in Vancouver over 10 years.
            </p>
          </div>
          <div className="col-xl-4 col-lg-6 col-sm-8 text-center">
            <img src={Restaurant} alt="Pizza" width="100%" />
          </div>
        </div>

        <div class="row">
          <div class="shop">
            <div class="text-center">
              <p class="promo-text" style={{ marginTop: "120px" }}>
                Order Online Pickup for 10% OFF
              </p>
              <button
                type="button"
                class="btn-main"
                // style={{ backgroundColor: "white", color: "black" }}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div class="row" style={{ marginBottom: "50px" }}>
          <div class="col-12">
            <Carousel animation="slide">
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-6 p-3 text-center"
            style={{
              height: "350px",
              color: "white",
              backgroundColor: "#ed8227",
            }}
          >
            <div class="top-space">
              <div class="hours-header">Hours of Operation</div>
              <div class="hours-text">Monday: 5pm - 11pm</div>
              <div class="hours-text">Tuesday: CLOSED</div>
              <div class="hours-text">Wednesday: 12pm - 3pm, 5pm - 11pm</div>
              <div class="hours-text">Thursday: 12pm - 3pm, 5pm - 11pm</div>
              <div class="hours-text">Friday: 12pm - 3pm, 5pm - 11pm</div>
              <div class="hours-text">Saturday: 12pm - 11pm</div>
              <div class="hours-text">Sunday: 12pm - 11pm</div>
            </div>
          </div>
          <div
            class="col-lg-6 p-3 text-center bg-light border hours-contact"
            style={{ color: "black" }}
          >
            <div class="top-space">
              <div class="row">
                <div class="col-12">
                  <p class="h3">Want to contact us? Send us a message</p>
                </div>
              </div>
              <div class="row justify-content-center align-items-center top-space">
                <div class="col-sm-5">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                    // style={{ width: "300px" }}
                  />
                </div>
                <div class="col-sm-5">
                  <input
                    type="email"
                    class="form-control input-space"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    // style={{ width: "300px" }}
                  />
                </div>
              </div>
              <div
                class="row justify-content-center align-items-center"
                style={{ marginTop: "15px" }}
              >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your Message"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              </div>
              <button type="button" class="btn btn-secondary top-space">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
