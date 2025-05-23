import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import TurfDetailsScreen from "../screens/TurfDetailsScreen";
import TurfEditScreen from "../screens/TurfEditScreen";
import BookingScreen from "../screens/BookingScreen"; // Now exclusively for new bookings
import { AuthContext } from "../context/AuthContext";
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="TurfDetails" component={TurfDetailsScreen} />
          <Stack.Screen name="TurfEdit" component={TurfEditScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} /> 
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
