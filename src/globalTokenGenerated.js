import React, { Component } from "react";
import axios from "axios";

const baseUrl = "https://alxtrip.algodox.co.in/";
const deviceId = {
  deviceId: "sfsdfesdf",
};

const withTokenHandler = (WrappedComponent) => {
  return class extends Component {
    state = {
      token: null,
      tokenExpiration: null,
    };

    componentDidMount() {
      const storedToken = localStorage.getItem("NewToken");
      const storedTokenExpiration = localStorage.getItem("tokenExpiration");

      if (
        storedToken &&
        storedTokenExpiration &&
        this.isTokenValid(storedTokenExpiration)
      ) {
        this.setState(
          {
            token: JSON.parse(storedToken),
            tokenExpiration: storedTokenExpiration,
          },
          () => {
            this.setTokenExpirationTimeout(storedTokenExpiration);
          }
        );
      } else {
        this.generateTokenAndUpdateState();
      }
    }

    componentWillUnmount() {
      clearTimeout(this.tokenExpirationTimeout);
    }

    isTokenValid = (expirationTime) => {
      const currentTime = new Date().getTime();
      const expirationTimeInMillis = new Date(expirationTime).getTime();
      return currentTime < expirationTimeInMillis;
    };

    setTokenExpirationTimeout = (expirationTime) => {
      const currentTime = new Date().getTime();
      const expirationTimeInMillis = new Date(expirationTime).getTime();
      const timeRemaining = expirationTimeInMillis - currentTime;

      if (timeRemaining > 0) {
        this.tokenExpirationTimeout = setTimeout(() => {
          this.clearTokenAndExpiration();
          this.generateTokenAndUpdateState();
        }, timeRemaining);
      } else {
        this.clearTokenAndExpiration();
        this.generateTokenAndUpdateState();
      }
    };

    clearTokenAndExpiration = () => {
      localStorage.removeItem("NewToken");
      localStorage.removeItem("tokenExpiration");
      this.setState({ token: null, tokenExpiration: null });
      clearTimeout(this.tokenExpirationTimeout);
    };

    generateTokenAndUpdateState = async () => {
      try {
        const tokenResponse = await axios.post(
          baseUrl + "jwt/generate-token",
          "",
          { headers: deviceId }
        );
        const token = tokenResponse.data.data;
        const expirationTime = new Date().getTime() + 28 * 60 * 1000; // 28 minutes in milliseconds
        this.setState({ token, tokenExpiration: expirationTime }, () => {
          localStorage.setItem("NewToken", JSON.stringify(token));
          localStorage.setItem("tokenExpiration", expirationTime);
          this.setTokenExpirationTimeout(expirationTime);
        });
      } catch (error) {
        console.error("Error generating token:", error);
        // Handle error here, you can throw the error or handle it gracefully
      }
    };

    render() {
      const { token, tokenExpiration } = this.state;
      return (
        <WrappedComponent
          token={token}
          tokenExpiration={tokenExpiration}
          generateTokenAndUpdateState={this.generateTokenAndUpdateState}
          {...this.props}
        />
      );
    }
  };
};

export default withTokenHandler;





