/**
 * Weather App
 * Build with react-native
 * @info-weather
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Info extends Component {
	goToSearchPage() {
		this.props.navigator.replace({
			id: 'Search',
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.infoTitleView}>
					<Text style={styles.infoTitle}>¿Qué es Lorem Ipsum?</Text>
				</View>
				<Text style={styles.infoText}>
					Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
					Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
					cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
					galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
					No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
					quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas
					"Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software
					de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
				</Text>
				<View style={styles.buttonContainer}>
					<Button  title="Search Page" color="#841584" onPress={this.goToSearchPage.bind(this)}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	infoTitleView:{
		marginTop:20,
		marginBottom:10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoText: {
		fontSize: 14
	},
	infoTitle: {
		fontSize: 18
	},
	buttonContainer: {
		marginTop: 30
	}
})