// NavigationContainer must wrap the entire app to enable navigation
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    // Everything inside NavigationContainer has access to navigation
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
