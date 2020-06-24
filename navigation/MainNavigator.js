import { createAppContainer, useNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AddDeck from '../screens/AddDeck';
import AddCard from '../screens/AddCard';
import DeckScreen from '../screens/DeckScreen';
import FinalDeck from '../screens/FinalDeck';
import QuizAnswer from '../screens/QuizAnswer';
import QuizQuestion from '../screens/QuizQuestion';

const MainNavigation = createStackNavigator(
	{
		Home: HomeScreen,
		AddDeck: AddDeck,
		AddCard: AddCard,
		DeckScreen: DeckScreen,
		FinalDeck: FinalDeck,
		QuizAnswer: QuizAnswer,
		QuizQuestion: QuizQuestion
	},
	{
		initialRouteName: 'Home'
	}
);

export default createAppContainer(MainNavigation);

// Now AppContainer is the main component for React to render
