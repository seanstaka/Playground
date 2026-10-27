import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    FlatList,
    StyleSheet,
    StatusBar,
    Button,
} from 'react-native';
import { useRouter } from 'expo-router';

import GameCard from '../components/GameCard';
import NavBar from '../components/NavBar';
import LinkBar from '../components/LinkBar';

// 1. Import local JSON data directly

export default function App() {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState("");

    let fetchURL = 'https://www.freetogame.com/api/games';
    const router = useRouter();


    useEffect(() => {
        fetchURL = 'https://www.freetogame.com/api/games' + category;
        fetchGamesFromApi();
    }, [category]);

    //async function fetchGamesFromApi() {
    const fetchGamesFromApi = async () => {
        try {
            // Step A: Send request across the web
            const response = await fetch(fetchURL);

            if (!response.ok) {
                throw new Error('Server error: Status ${reponse.status}');
            }
            // Step B: Convert raw HTTP response into JavaScript objects
            const json = await response.json();

            // Step C: Update state with our new array
            setGames(json);
        } catch (error) {
            console.error('Network Error:', error);
        } finally {
            setIsLoading(false);
        }
    };



    if (isLoading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#38BDF8" />
                <Text style={styles.loadingText}>Fetching Games...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.headerTitle}>🎮 Game Backlog</Text>
            <LinkBar />
            <Button title="All Games" onPress={() => {
                setCategory("");
            }} />
            <Button title="Strategy Games" onPress={() => {
                setCategory("?category=strategy");
            }} />

            {/* 3. Pass JSON array into FlatList */}
            <FlatList
                data={games}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => {
                    return <GameCard item={itemData.item} />;
                }}
                contentContainerStyle={styles.listPadding}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A', // Gaming dark theme (Slate)
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#38BDF8',
        padding: 16,
        textAlign: 'center',
    },
    listPadding: {
        paddingHorizontal: 16,
    },
});
