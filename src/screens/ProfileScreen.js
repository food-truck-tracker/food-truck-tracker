import React from "react";
import { Text, View, Button } from "@shoutem/ui";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-picker";

import LoginForm from "../components/LoginForm";
import Register from "./Register";
import TruckRegisterForm from "./TruckRegisterForm";
import { loginUser, logoutUser, registerUser } from "../actions/auth";
import { updateTrucksLocation } from "../actions/location";
import { fetchUserInfo, resetUserInfo, uploadImage } from "../actions/user";
import { getUserLocation } from "../utils";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.authUnsubscriber = null;
    this.state = {
      view: "root",
      emailValue: "",
      passwordValue: "",
    };
  }

  componentDidMount() {
    this.props.fetchUserInfo();
  }

  // get user location to update in database
  onLocationUpdate = async () => {
    try {
      let res = await getUserLocation();
      this.props.updateTrucksLocation(res.lat, res.lon);
    } catch (err) {
      console.error(err);
    }
  };

  // open page of favroites
  onOpenFavorites = () => {
    this.props.navigation.push("Favorites");
  };

  // upload new pic to firebase storage
  onUploadPicture = (type = "extra") => {
    ImagePicker.showImagePicker(
      {
        title: "Pick image for your truck",
        mediaType: "photo",
      },
      res => {
        console.log("imagepicker response", res);
        if (!res.didCancel && !res.error) {
          const source = { uri: res.uri };
          console.log("image source", source);
          this.props.uploadImage(
            this.props.user.user.truck_id,
            res.uri,
            type,
            res.fileName
          );
        }
      }
    );
  };

  // attempt to login
  onLogin = async () => {
    try {
      await this.props.loginUser(
        this.state.emailValue,
        this.state.passwordValue
      );
      await this.props.fetchUserInfo();
    } catch (error) {
      console.log(error);
    }
  };

  // attempt to register
  onRegister = async (name, email, pass) => {
    try {
      const response = await this.props.registerUser(name, email, pass);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // attempt to logout
  onLogout = async () => {
    try {
      await this.props.logoutUser();
      await this.props.resetUserInfo();
    } catch (error) {
      console.log(error);
    }
  };

  // changes state based on user input
  onChangeLogin = (e, type) => {
    this.setState({ [`${type}Value`]: e });
  };

  // changes mounted component based on view var
  _changeView = view => {
    this.setState({ view });
  };

  // returns view to render
  _chooseRender = () => {
    if (this.state.view == "register") {
      return (
        <Register
          changeView={this._changeView}
          registerUser={this.onRegister}
          isFetching={this.props.auth.isFetching}
        />
      );
    } else if (this.state.view == "login") {
      return (
        <LoginForm
          isFetching={this.props.auth.isFetching}
          changeView={this._changeView}
          emailValue={this.state.emailValue}
          passwordValue={this.state.passwordValue}
          onChange={(e, type) => this.onChangeLogin(e, type)}
          onPress={this.onLogin}
        />
      );
    } else if (this.state.view == "page_edit") {
      return <TruckRegisterForm update={true} changeView={this._changeView} />;
    } else {
      const { user } = this.props.user;
      return (
        <View>
          {this.props.auth.loggedIn ? (
            <>
              <Text>{this.props.auth.user.email}</Text>
              {user && user["truck_id"] && (
                <>
                  <Button styleName="secondary" onPress={this.onLocationUpdate}>
                    <Text>UPDATE LOCATION</Text>
                  </Button>
                  <Button
                    styleName="secondary"
                    onPress={() => {
                      this.setState({ view: "page_edit" });
                    }}
                  >
                    <Text>EDIT TRUCK INFO</Text>
                  </Button>
                  <Button
                    styleName="secondary"
                    onPress={() => this.onUploadPicture("thumbnail")}
                  >
                    <Text>UPLOAD THUMBNAIL TRUCK PICTURE</Text>
                  </Button>
                  <Button styleName="secondary" onPress={this.onUploadPicture}>
                    <Text>UPLOAD TRUCK PICTURE</Text>
                  </Button>
                </>
              )}
              <Button styleName="secondary" onPress={this.onOpenFavorites}>
                <Text>FAVORITES</Text>
              </Button>
              <Button styleName="secondary" onPress={this.onLogout}>
                <Text>LOGOUT</Text>
              </Button>
            </>
          ) : (
            <>
              <Button
                styleName="secondary"
                onPress={() => {
                  this.setState({ view: "login" });
                }}
              >
                <Text>Login</Text>
              </Button>
              <Button
                styleName="secondary"
                onPress={() => {
                  this.setState({ view: "register" });
                }}
              >
                <Text>Register</Text>
              </Button>
            </>
          )}
        </View>
      );
    }
  };

  render() {
    return <View>{this._chooseRender()}</View>;
  }
}

// redux connection
const mapStateToProps = state => ({
  auth: state.auth,
  location: state.location,
  user: state.user,
});

const mapDispatchToProps = {
  loginUser,
  logoutUser,
  registerUser,
  updateTrucksLocation,
  fetchUserInfo,
  resetUserInfo,
  uploadImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
