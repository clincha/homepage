import {Text, View, StyleSheet, Image, TouchableOpacity, Linking} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/profile.jpg')}
                style={styles.avatar}
            />
            <View style={styles.content}>
                <Text style={styles.text}>Angus Clinch</Text>
                <Text style={styles.text}>Full Stack Engineer, UK</Text>
            </View>
            <View style={styles.linksRow}>
                <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://github.com/clincha')}>
                    <FontAwesome name="github" size={32} color="#fff" />
                    <Text style={styles.text}>GitHub</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://www.linkedin.com/in/angus-clinch-6189a1150/')}>
                    <FontAwesome name="linkedin" size={32} color="#fff" />
                    <Text style={styles.text}>LinkedIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('/')}>
                    <FontAwesome name="globe" size={32} color="#fff" />
                    <Text style={styles.text}>Website</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121508',
    },
    avatar: {
        width: '20%',
        height: '20%',
        aspectRatio: 1,
        borderRadius: 9999,
        borderWidth: 4,
        borderColor: '#fff',
    },
    content: {
        alignItems: 'center',
        marginBottom: 30,
    },
    linksRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 32,
    },
    linkItem: {
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 8,
    },
})
