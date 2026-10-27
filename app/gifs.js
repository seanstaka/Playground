import { Button, Text, View, FlatList, Modal, StyleSheet, Image, Pressable } from 'react-native';
import { useState, useEffect, useRef } from 'react';

import NavBar from '../components/NavBar';
import LinkBar from '../components/LinkBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MemeCard from '../components/MemeCard';


const gifs = () => {
    const [gifList, setGifList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalID, setModalID] = useState("");
    const [modalMeme, setModalMeme] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(false);

    useEffect(() => {
        getGifapi();
    }, [])

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true; //Need to research useRef
            return;
        }
        popUp();
    }, [modalID]);

    const getGifapi = async () => {
        try {
            const response = await fetch('https://api.imgflip.com/get_memes');
            console.log(response);
            const json = await response.json();

            setGifList(json.data.memes);
            setModalMeme(json.data.memes[0]);
        } catch (err) {
            console.error("PRINTING Error: " + err)
        } finally {
            setIsLoading(false);
        }
    }

    const getActiveMeme = () => {
        const meme = gifList.find((curr) => curr.id === modalID);
        setModalMeme(meme);
    }

    const popUp = () => {
        getActiveMeme(modalID);
        setShowModal(true);
    }

    if (isLoading) {
        return (
            <View>
                <Text>Loading Memes...</Text>
            </View>
        );
    }


    return (
        <SafeAreaView>
            <LinkBar />

            <Modal
                style={styles.memeModal}
                visible={showModal}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTxt}>{modalMeme.name}</Text>
                    <Image source={{ uri: modalMeme.url }} style={{ height: modalMeme.height / 2, aspectRatio: 1, maxHeight: 500 }} />
                    <Button title="close" onPress={() => {
                        setShowModal(false);
                    }} />
                </View>
            </Modal>
            <FlatList
                data={gifList}
                renderItem={({ item }) => {
                    return (
                        <MemeCard item={item} whenPressed={setModalID} />
                    );
                }}
            />

        </SafeAreaView>
    );
}

export default gifs;

const styles = StyleSheet.create({
    memeModal: {
        backgroundColor: 'green',
        marginVertical: 100,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    modalView: {
        flex: 1,
        padding: 20,
        backgroundColor: "gray",
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTxt: {
        fontSize: 48,
        fontStyle: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    }
});