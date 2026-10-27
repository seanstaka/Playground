import {Text, View} from 'react-native';

import NavBar from '../components/NavBar';
import LinkBar from '../components/LinkBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const about = () => {

	return (
		<SafeAreaView>
            <LinkBar />
			<Text>About</Text>
		</SafeAreaView>
	);
}

export default about;