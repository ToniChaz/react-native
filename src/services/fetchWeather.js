export default function (query) {
	return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=2a49869958da21f423c9d4cce4bed762`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	})
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				return response.json().then(err => {
					throw err
				})
			}
		})
}
