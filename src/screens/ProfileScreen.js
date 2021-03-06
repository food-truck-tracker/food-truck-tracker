import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button } from "@shoutem/ui";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-picker";

import LoginForm from "../components/LoginForm";
import { loginUser, logoutUser, registerUser } from "../actions/auth";
import { updateTrucksLocation } from "../actions/location";
import { fetchUserInfo, resetUserInfo, uploadImage } from "../actions/user";
import { getUserLocation } from "../utils";

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#808080",
  },
  button: {
    margin: 10,
  },
  view: {
    paddingHorizontal: 12,
  },
});

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        if (!res.didCancel && !res.error) {
          const source = { uri: res.uri };
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
      console.error(error);
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

  // when register a truck is clicked
  onTruckRegister = () => {
    this.props.navigation.push("TruckRegisterForm");
  };

  onRegisterClick = () => {
    this.props.navigation.push("Register");
  };

  // returns view to render
  _chooseRender = () => {
    const { user } = this.props.user;
    return (
      <View style={styles.view}>
        {this.props.auth.loggedIn ? (
          <>
            {user && <Text style={styles.name}>{user.name}</Text>}
            <Text style={styles.email}>{this.props.auth.user.email}</Text>
            {user && user["truck_id"] ? (
              <>
                <Button
                  style={styles.button}
                  styleName="secondary"
                  onPress={this.onLocationUpdate}
                >
                  <Text>UPDATE LOCATION</Text>
                </Button>
                <Button
                  style={styles.button}
                  styleName="secondary"
                  onPress={() => this.onUploadPicture("thumbnail")}
                >
                  <Text>UPLOAD THUMBNAIL TRUCK PICTURE</Text>
                </Button>
                <Button
                  style={styles.button}
                  styleName="secondary"
                  onPress={this.onUploadPicture}
                >
                  <Text>UPLOAD TRUCK PICTURE</Text>
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={styles.button}
                  styleName="secondary"
                  onPress={this.onTruckRegister}
                >
                  <Text>REGISTER A TRUCK</Text>
                </Button>
              </>
            )}
            <Button
              style={styles.button}
              styleName="secondary"
              onPress={this.onOpenFavorites}
            >
              <Text>FAVORITES</Text>
            </Button>
            <Button
              style={styles.button}
              styleName="secondary"
              onPress={this.onLogout}
            >
              <Text>LOGOUT</Text>
            </Button>
          </>
        ) : (
          <View style={styles.view}>
            <LoginForm
              isFetching={this.props.auth.isFetching}
              hasError={this.props.auth.hasError}
              changeView={this._changeView}
              emailValue={this.state.emailValue}
              passwordValue={this.state.passwordValue}
              onChange={(e, type) => this.onChangeLogin(e, type)}
              onPress={this.onLogin}
            />
            <Button
              styleName="secondary"
              style={styles.button}
              disabled={this.props.auth.isFetching}
              onPress={this.onRegisterClick}
            >
              <Text>Register</Text>
            </Button>
          </View>
        )}
      </View>
    );
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
