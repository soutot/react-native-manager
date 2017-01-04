import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	//este método permite utilizar as propriedades novas e antigas do componente enquanto
	//ele é renderizado
	componentWillReceiveProps(nextProps) {
		//nextprops contém as próximas propriedades que este componente renderizará
		//this.props contém as antigas propriedades deste componente

		this.createDataSource(nextProps);
	}

	// { employees } === this.props.employees
	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		//employees deve ser um array
		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	render() {
		console.log(this.props);
		return (
			<ListView 
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow} //responsável por renderizar cada linha
			/>
		);
	}
}

const mapStateToProps = state => {
	//employees será um array baseado no objeto state.employees
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid }; //o retorno será: { name: nome, phone: numero, shift: data, uid: xxxx }
	});
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
