import Permissions from "react-native-permissions";
import { reject } from "rsvp";

export const getUserLocation = async () => {
  // first check location permission
  let res = await Permissions.check("location");

  if (res !== "authorized") {
    let reqRes = await Permissions.request("location");

    // throw error if location not given
    if (reqRes !== "authorized") {
      return new Error("Permission not granted!");
    }
  }

  // get user location
  try {
    const options = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000,
    };
    const position = await getCurrentPosition(options);
    const { latitude, longitude } = position.coords;
    return {
      lat: latitude,
      lon: longitude,
    };
  } catch (err) {
    return new Error(err.message);
  }
};

// async/await wrapper
const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
