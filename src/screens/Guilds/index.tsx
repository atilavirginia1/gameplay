import React from "react";
import { View, FlatList } from "react-native";
import { GuildProps } from "../../components/Guild";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from './style';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Last of Us',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Last of Us',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Last of Us',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Last of Us',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Last of Us',
            icon: 'image.png',
            owner: true
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                ListHeaderComponent={() => <ListDivider isCentered />}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
            />
        </View>
    );
};
