import React, { useState, useEffect } from "react";
import { Feather } from "expo-vector-icons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Linking } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const ProfileScreen = () => {
  const imagePaths = [require("../../assets/profileImage3.jpg")];
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const openPhoneDialer = () => {
    Linking.openURL("tel:0768030344");
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const services = ["Suspension Repairs", "Transmission Issues", "Electrical", "Electronic",
   "Body Repairs & Painting", "Breakdown Repair and Services", "Engine", "Scanning", "HV System","Brake Services and Maintenance"];
  
   return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Text style={styles.welcome}>True care in Autocare</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={20} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onPressIn={() => {}}
              placeholder="What are you looking for"
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          {imagePaths.map((path, index) => (
            <Image key={index} source={path} style={styles.image} />
          ))}
        </View>

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.Title}>ABC Repair centre</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={20} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={24} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={openPhoneDialer}>
            <View style={styles.contact}>
              <Ionicons name="call" size={20} color="gray" />
              <Text  style={styles.contacttext}>  Call</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.TimeContainer}>
          <View style={styles.Time}>
            <Ionicons name="time" size={20} color="gray" />
            <Text style={styles.headFont}> Opening Hours</Text>
          </View>

          <Text style={styles.hours}>           24/7 Service</Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <Ionicons name="location" size={20} color="gray" />
            <Text style={styles.headFont}> location</Text>
          </View>

          <Text>         No.02, Dharmapala place, Rajagiriya</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              region={mapRegion}
            />
            <Marker coordinate={mapRegion} />
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.Price}>
            <Ionicons name="pricetag" size={20} color="gray" />
            <Text style={styles.headFont}> Price Range</Text>
          </View>

          <Text style={styles.hours}>           24/7 Service</Text>
        </View>

        <View style={styles.serviceContainer}>
          <View style={styles.Service}>
            <Ionicons name="list" size={20} color="gray" />
            <Text style={styles.headFont}> Services</Text>
          </View>

          {services.map((service, index) => (
            <Text key={index} style={styles.serviceList}>
              {service}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: 10,
  },

  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    alignContent: "center",
    color: "#2c3e50",
    marginTop: 10,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#D1D0CF",
    borderRadius: 5,
    marginVertical: 10,
    height: 30,
    width: 350,
    alignSelf: "center",
  },
  searchIcon: {
    marginHorizontal: 10,
    color: "gray",
    marginTop: 5,
  },

  searchWrapper: {
    flex: 1,
    backgroundColor: "#D1D0CF",
    marginRight: 5,
    borderRadius: 5,
  },

  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 5,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    aspectRatio: 2,
    resizeMode: "cover",
    borderRadius: 15,
    marginVertical: 15,
  },
  details: {
    marginTop: 0,
    backgroundColor: "lightWhite",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  titleRow: {
    marginHorizontal: 20,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },

  Title: {
    fontSize: 18,
  },
  ratingRow: {
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
  },
  rating: {
    top: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
  },
  contactContainer: {
    backgroundColor: "#125C75",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    bottom: -10,
   
   
  },
  contacttext:{
    color:"#FFFFFF"
  },

  contact: {
    padding: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
   
  },
  TimeContainer: {
    backgroundColor: "#D1D0CF",
    borderRadius: 20,
    marginVertical: 20,
    paddingBottom:5,
    width: "100%",
    alignSelf: "center",
  },
  Time: {
    padding: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  headFont: {
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "center",
    color: "#2c3e50",
  },

  hours:{
    fontWeight: "bold",
    fontSize: 18,
    alignContent: "center",
    color: "#FF0202",
  },
  locationContainer: {
    backgroundColor: "#D1D0CF",
    borderRadius: 20,
    marginVertical: -10,
    padding:0,
    width: "100%",
    alignSelf: "center",
  },
  location: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
 mapContainer: {
    marginVertical: 8,
    width: 380,
    height: 200,
    padding:8,
    borderRadius: 20,
    borderColor: "gray",
    justifyContent: "center",
  },

  priceContainer: {
    backgroundColor: "#D1D0CF",
    borderRadius: 20,
    marginVertical: 20,
    paddingBottom:5,
    width: "100%",
    alignSelf: "center",
  },

  Price: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  serviceContainer: {
    backgroundColor: "#D1D0CF",
    borderRadius: 20,
    marginVertical: 20,
    paddingBottom:10,
    paddingTop:10,
    width: "100%",
    alignSelf: "center",
  },
  
  Service: {
    padding: 8,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
serviceList:{
   // paddingLeft:10,
}
});

export default ProfileScreen;
