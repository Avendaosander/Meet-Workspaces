import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'es',
		lng: 'es',
		ns: [
			'homepage',
			'login',
			'register',
			'nav',
			'header',
			'map',
			'details',
			'comments',
			'formComments',
			'formReservation',
			'reservations',
			'navDash',
			'dashWorkspaces',
			'cardWorkspace',
			'formWorkspace',
			'modalDelete',
			'dashUsers',
			'rowUser',
			'footer'
		],
		interpolation: {
			escapeValue: false
		},
		backend: {
			loadPath: 'http://localhost:5173/locales/{{lng}}/{{ns}}.json'
		}
	})

export default i18n
