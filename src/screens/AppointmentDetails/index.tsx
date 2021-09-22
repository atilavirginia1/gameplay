import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './style';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { Member } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListDivider } from '../../components/ListDivider';
export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Carol',
            avatar_url: 'https://github.com/acarolsf.png',
            status: 'online'
        },

        {
            id: '2',
            username: 'Atila',
            avatar_url: 'https://github.com/atilavirginia1.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader 
                title= "Jogadores"
                subtitle= "Total 2"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member 
                        data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )

}