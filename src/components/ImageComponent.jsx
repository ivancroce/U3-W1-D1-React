import { Component } from "react";
import ButtonComponent from "./ButtonComponent";

class ImageComponent extends Component {
  render() {
    console.log("PROPS", this.props);

    return (
      <div className="image-wrapper">
        <img src={this.props.imageSrc} alt={this.props.imageAlt} />
        <ButtonComponent className="btn-secondary" text="More Info" />
      </div>
    );
  }
}

export default ImageComponent;
