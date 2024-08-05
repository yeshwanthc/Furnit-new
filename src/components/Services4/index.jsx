import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

const Services4 = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  
  const [isOpen, setOpen] = React.useState(false);

  return (
    <section className="services halfbg">
      <div
        className="background bg-img valign parallaxie"
        style={{ backgroundImage: `url(/assets/img/04.jpg)` }}
        data-overlay-dark="7"
      >
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen}
            videoId="AzwC6umvd1s"
            onClose={() => setOpen(false)}
          />
        )}
        <Link
          href="https://youtu.be/AzwC6umvd1s"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <a className="play-button vid">
            <svg className="circle-fill">
              <circle
                cx="43"
                cy="43"
                r="39"
                stroke="#fff"
                strokeWidth=".5"
              ></circle>
            </svg>
            <svg className="circle-track">
              <circle
                cx="43"
                cy="43"
                r="39"
                stroke="none"
                strokeWidth="1"
                fill="none"
              ></circle>
            </svg>

            <span className="polygon">
              <i className="pe-7s-play"></i>
            </span>
          </a>
        </Link>
      </div>
      <div className="container ontop py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div className="item-bx  p-4 rounded shadow-sm d-flex flex-column justify-content-between">
              <h2 className="custom-font numb">01</h2>
              <h6 className="mb-3">Architecture</h6>
              <p>
                At Furnitt, we provide innovative architectural solutions that blend aesthetics with functionality to create stunning spaces.
              </p>
              <Link href="/architecture">
                <a className="more custom-font mt-3">Read More</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div className="item-bx  p-4 rounded shadow-sm d-flex flex-column justify-content-between">
              <h2 className="custom-font numb">02</h2>
              <h6 className="mb-3">Interior Design</h6>
              <p>
                Our interior design services focus on creating personalized and stylish environments that reflect your unique taste and needs.
              </p>
              <Link href="/interior-design">
                <a className="more custom-font mt-3">Read More</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div className="item-bx p-4 rounded shadow-sm d-flex flex-column justify-content-between">
              <h2 className="custom-font numb">03</h2>
              <h6 className="mb-3">3D Modeling</h6>
              <p>
                We offer detailed 3D modeling services to help visualize your space before the actual implementation, ensuring every detail is perfect.
              </p>
              <Link href="/3d-modeling">
                <a className="more custom-font mt-3">Read More</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div className="item-bx p-4 rounded shadow-sm d-flex flex-column justify-content-between">
              <h2 className="custom-font numb">04</h2>
              <h6 className="mb-3">Furniture Design</h6>
              <p>
                Our custom furniture design service creates bespoke pieces that perfectly fit your space and style, enhancing both function and form.
              </p>
              <Link href="/furniture-design">
                <a className="more custom-font mt-3">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services4;
