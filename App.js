import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

import MainNavigator from './navigation/MainNavigator';

export default function App() {
	return <MainNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
