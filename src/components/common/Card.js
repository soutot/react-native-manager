import React from 'react';
import { View } from 'react-native';

const Card = (props) => {	
	return (
		//props.children pega todos os componentes filhos
		//no local onde o component Card é chamado
		//neste exemplo, props.children = <Text>Title: {props.albumItem.title}</Text>
		<View style={style.containerStyle}>
			{props.children}
		</View>
	);
};


const style = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 10
	}
};

export { Card };
