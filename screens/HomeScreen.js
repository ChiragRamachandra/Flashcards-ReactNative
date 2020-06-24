import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const HomeScreen = (props) => {
	return (
		<View>
			<Text> HomeScreen</Text>
			<Button title="Add a deck" onPress={() => props.navigation.navigate('AddDeck')} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default HomeScreen;
