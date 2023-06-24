import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import theme from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Auth from "./screens/Auth";
import Header from "./navigation/Header";
import { Screens } from "./data";
import Drawer from "./screens/Drawer";
import Products from "./screens/Products";
import ProductDeatail from "./screens/ProductDetail";
import Cart from "./screens/Cart";
import HeaderSecondary from "./navigation/HeaderSecondary";
import Checkout from "./screens/Checkout";
import Payment from "./screens/Payment";
import AuthContextProvider from "./provider/AuthContextProvider";

const Stack = createStackNavigator();
const {
	HomeScreen,
	AuthScreen,
	ProductsScreen,
	ProductDeatailScreen,
	CartScreen,
	CheckoutScreen,
	PaymentScreen,
	DrawerScreen,
} = Screens;

export default function App() {
	return (
		<AuthContextProvider>
			<NativeBaseProvider {...{ theme }}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName={HomeScreen}>
						<Stack.Screen
							name={DrawerScreen}
							component={Drawer}
							options={{ headerShown: false }}
						/>

						<Stack.Screen
							name={HomeScreen}
							component={Home}
							options={{
								header: (props) => <Header {...props} />,
							}}
						/>
						<Stack.Screen
							name={AuthScreen}
							component={Auth}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name={ProductsScreen}
							component={Products}
							options={{
								header: (props) => <Header {...props} />,
							}}
						/>
						<Stack.Screen
							name={ProductDeatailScreen}
							component={ProductDeatail}
							options={{
								header: (props) => <Header {...props} />,
							}}
						/>

						<Stack.Screen
							name={CartScreen}
							component={Cart}
							options={{
								header: (props) => <HeaderSecondary {...props} />,
							}}
						/>
						<Stack.Screen
							name={CheckoutScreen}
							component={Checkout}
							options={{
								header: (props) => <HeaderSecondary {...props} />,
							}}
						/>
						<Stack.Screen
							name={PaymentScreen}
							component={Payment}
							options={{
								header: (props) => <HeaderSecondary {...props} />,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
				<StatusBar style="auto" backgroundColor={theme.colors.teal[500]} />
			</NativeBaseProvider>
		</AuthContextProvider>
	);
}
