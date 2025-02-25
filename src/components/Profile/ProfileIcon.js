import { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          drop="left"
        >
          <DropdownToggle
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png"
              className="br-100 h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          {/* Old <DropdownMenu className='b--transparent shadow-5' style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}} right> */}
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{
              marginLeft: "-6rem",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <DropdownItem onClick={() => this.props.toggleModal()}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange("signout")}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
