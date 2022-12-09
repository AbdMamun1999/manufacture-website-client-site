import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = ({ product }) => {
  const { img, about, details } = product;

  return (
    <div className="col-span-3">
      <div className="bg-base-100  lg:grid  lg:grid-cols-5">
        <div className="col-span-2">
          <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: img,
                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 1800,
                },
                lensStyle: {
                  background: "hsla(0, 0%, 100%, .3)",
                  border: "1px solid #ccc",
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "100%",
                },
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: false,
                shouldUsePositiveSpaceLens: true,
              }}
            />
          </div>
        </div>
        <div className="card-body col-span-3">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl">
            Price:
            <span className="text-2xl text-primary"> ${product.price}</span>
          </p>
          <div className="divider"></div>
          <ul>
            <li>
              <span className="font-bold">Brand:</span> {details?.brands}
            </li>
            <li>
              <span className="font-bold">Style:</span> {details?.color}
            </li>
            <li>
              <span className="font-bold">Item Weight:</span>{" "}
              {details?.connectivity_technology}
            </li>
            <li>
              <span className="font-bold">Ear Placement:</span>{" "}
              {details?.ear_placement}
            </li>
            <li>
              <span className="font-bold">Model Name:</span>{" "}
              {details?.model_name}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="mt-2 list-disc lg:w-[95%] mx-auto p-8">
          <h2 className="font-bold">About this item:</h2>
          {about?.map((des, index) => (
            <li key={index}>{des}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
