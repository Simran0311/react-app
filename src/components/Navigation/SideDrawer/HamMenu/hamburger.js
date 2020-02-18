import React from "react";

class hamburger extends React.Component {
  state = { isHamburger: true };

  handleClick = () => {
    if (this.props.alsoRun) {
      this.props.alsoRun(!this.state.isHamburger);
    }
    this.setState({ isHamburger: !this.state.isHamburger });
  };

  render() {
    const delay = this.props.delay ? this.props.delay : "0.25s";
    const colors = this.props.colors
      ? this.props.colors
      : { hamburger: "lightgrey", cross: "lightgrey" };
    const size = this.props.size ? this.props.size : 25;
    const lineThickness = size / 12;
    const shiftLines = size / 2 - lineThickness;
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "0"
          
        }}
        onClick={this.handleClick}
      >
        <hr
          style={{
            margin: "0",
            border: `solid ${lineThickness}px`,
            borderRadius: "calc(5px + 5%)",
            backgroundColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross,
            borderColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross,
            padding: "0",
            width: "100%",
            transform: this.state.isHamburger
              ? "none"
              : `translate(0, ${shiftLines}px) rotate(45deg)`,
            transformOrigin: "50% 50%",
            transition: `all ${delay}`,
          }}
        />
        <hr
          style={{
            margin: "0",
            border: `solid ${lineThickness}px`,
            borderRadius: "calc(5px + 5%)",
            borderColor: colors.hamburger,
            backgroundColor: colors.hamburger,
            padding: "0",
            width: this.state.isHamburger ? "100%" : "0",
            opacity: this.state.isHamburger ? "1" : "0",
            transition: `all ${delay}`
          }}
        />
        <hr
          style={{
            margin: "0",
            border: `solid ${lineThickness}px`,
            borderRadius: "calc(5px + 5%)",
            backgroundColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross, 
            borderColor: this.state.isHamburger
              ? colors.hamburger
              : colors.cross,
            padding: "0",
            width: "100%",
            transform: this.state.isHamburger
              ? "none"
              : `translate(0, -${shiftLines}px) rotate(-45deg)`,
            transformOrigin: "50% 50%",
            transition: `all ${delay}`,
          }}
        />
      </div>
    );
  }
}

export default hamburger;


