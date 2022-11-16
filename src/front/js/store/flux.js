const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			register: (email, pass, nav, e) => {
				e.preventDefault();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": email,
					"password": pass
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3001-bairon00-sistemadeauten-vii16mp8sdl.ws-us75.gitpod.io/register", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						if (result) {
							nav("/login")
						}
						else {
							nav("/login")
						}
					})
					.catch(error => console.log('error', error));
			},
			Login: (email, pass, e, navegar) => {
				e.preventDefault();

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": email,
					"password": pass
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3001-bairon00-sistemadeauten-vii16mp8sdl.ws-us75.gitpod.io/login", requestOptions)
					.then(response => response.json())
					.then(result => { localStorage.setItem("Token", result.token); navegar("/Private") })
					.catch(error => console.log('error', error));
			},
			verificacion: () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("Token"));

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				fetch("https://3001-bairon00-sistemadeauten-vii16mp8sdl.ws-us75.gitpod.io/profile", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},
			cerrar: (navegar) => {
				localStorage.clear();
				navegar("/")
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
