import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "_styles/colors";

import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import Tabbar from "./Tabbar";

import HomeScreen from "_screens/HomeScreen";
import HotelDetails from "_screens/HotelDetails";
import BookingDetails from "_screens/BookingDetails";
import HotelSelectRoomType from "_screens/HotelSelectRoomType";
import HotelContactDetails from "_screens/HotelContactDetails";
import HotelSpecialRequest from "_screens/HotelSpecialRequest";
import HotelPaymentDetail from "_screens/HotelPaymentDetail";
import HotelPaymentProcess from "_screens/HotelPaymentProcess";
import HotelPaymentSuccess from "_screens/HotelPaymentSuccess";
import HotelETicket from "_screens/HotelETicket";
import MyOrders from "_screens/MyOrders";
import FavoritesHotel from "_screens/FavoritesHotel";
import FavoritesArticle from "_screens/FavoritesArticle";
import MapExploration1 from "_screens/MapExploration1";
import Profile1 from "_screens/Profile1";
import ProfilePersonalInfo from "_screens/ProfilePersonalInfo";
import ProfilePrivacySharing from "_screens/ProfilePrivacySharing";
import ProfileRequestPersonalData from "_screens/ProfileRequestPersonalData";
import ProfileDeleteAccount from "_screens/ProfileDeleteAccount";
import ProfileNotification from "_screens/ProfileNotification";
import ProfileMyReview from "_screens/ProfileMyReview";

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <Tabbar {...props} />}
      initialRouteName="a"
      backBehavior={"history"}
      screenOptions={{
        overlayColor: "transparent",
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, title: "HomeScreen" }}
      />
      <Tabs.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{
          headerShown: false,
          title: "HotelDetails",
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="BookingDetails"
        component={BookingDetails}
        options={{
          title: "Booking Details",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelSelectRoomType"
        component={HotelSelectRoomType}
        options={{
          title: "Select Room Type",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelContactDetails"
        component={HotelContactDetails}
        options={{
          title: "Contact Details",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelSpecialRequest"
        component={HotelSpecialRequest}
        options={{
          title: "Special Request",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelPaymentDetail"
        component={HotelPaymentDetail}
        options={{
          title: "PaymentDetail",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelPaymentProcess"
        component={HotelPaymentProcess}
        options={{
          title: "PaymentProcess",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelPaymentSuccess"
        component={HotelPaymentSuccess}
        options={{
          title: "Payment Success",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="HotelETicket"
        component={HotelETicket}
        options={{
          title: "E-Ticket",
          header: (props) => <Navbar {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          title: "My Orders",
          header: (props) => <Navbar2 {...props} />,
        }}
      />
      <Tabs.Screen
        name="FavoritesHotel"
        component={FavoritesHotel}
        options={{
          title: "Favorites",
          header: (props) => <Navbar3 {...props} />,
        }}
      />
      <Tabs.Screen
        name="FavoritesArticle"
        component={FavoritesArticle}
        options={{
          title: "Favorites",
          header: (props) => <Navbar3 {...props} />,
        }}
      />
      <Tabs.Screen
        name="MapExploration1"
        component={MapExploration1}
        options={{
          headerShown: false,
          title: "MapExploration",
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile1"
        component={Profile1}
        options={{ headerShown: false, title: "Profile" }}
      />
      <Tabs.Screen
        name="ProfilePersonalInfo"
        component={ProfilePersonalInfo}
        options={{
          title: "Personal Info",
          header: (props) => <Navbar4 {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="ProfilePrivacySharing"
        component={ProfilePrivacySharing}
        options={{
          title: "Privacy Sharing",
          tabBarStyle: { display: "none" },
          header: (props) => <Navbar4 {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="ProfileRequestPersonalData"
        component={ProfileRequestPersonalData}
        options={{
          title: "Request Personal Data",
          tabBarStyle: { display: "none" },
          header: (props) => <Navbar4 {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="ProfileDeleteAccount"
        component={ProfileDeleteAccount}
        options={{
          title: "Delete Account",
          tabBarStyle: { display: "none" },
          header: (props) => <Navbar4 {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="ProfileNotification"
        component={ProfileNotification}
        options={{
          title: "Notification",
          tabBarStyle: { display: "none" },
          header: (props) => <Navbar4 {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="ProfileMyReview"
        component={ProfileMyReview}
        options={{
          title: "MyReview",
          tabBarStyle: { display: "none" },
          header: (props) => <Navbar4 {...props} />,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs.Navigator>
  );
}

export default AppNavigator;
