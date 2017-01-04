import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { connect } from 'react-redux';
import { CardSection } from './common';
//import { employeeNavigation } from '../actions';

class ListItem extends Component {

	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}

	render() {
		const { titleStyle } = styles;
		const { name } = this.props.employee;

		return (
			<TouchableWithoutFeedback
				onPress={this.onRowPress.bind(this)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}> 
							{name}
						</Text>
					</CardSection>
					
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;//connect(null, { employeeNavigation })(ListItem);
