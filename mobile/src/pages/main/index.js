import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
    requestPermissionsAsync,
    getCurrentPositionAsync,
} from 'expo-location';
import { StyleSheet } from 'react-native';

import {
    Avatar,
    Container,
    TextName,
    TextBio,
    TextTechs,
    InputForm,
    Btn,
    Form,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api/api';

const styles = StyleSheet.create({
    Ionicos: {
        textAlign: 'center',
        margin: 15,
    },
});

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: null,
            techs: '',
            devs: [],
        };
    }

    async componentDidMount() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;

            await this.setState({
                region: {
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    LongitudeDelta: 0.04,
                },
            });
        }
    }

    loadDevs = async () => {
        await this.setState({ devs: [] });
        const info = await api.get('/user', {
            params: {
                techs: this.state.techs,
            },
        });

        await this.setState({
            devs: this.state.devs.concat(info.data),
        });

        console.log(this.state.devs);
    };

    handlerInputChange = async e =>
        await this.setState({
            techs: e,
        });

    render() {
        return (
            <>
                {this.state.region ? (
                    <MapView style={{ flex: 1 }} region={this.state.region}>
                        {this.state.devs.map((_, index) => (
                            <Marker
                                key={this.state.devs[index].id}
                                coordinate={{
                                    latitude: this.state.devs[index].latitude,
                                    longitude: this.state.devs[index].longitude,
                                }}
                            >
                                <Avatar
                                    source={{
                                        uri: this.state.devs[index].avatar_url,
                                    }}
                                />
                                <Callout
                                    onPress={() => {
                                        this.props.navigation.navigate(
                                            'Profile',
                                            {
                                                name: this.state.devs[index]
                                                    .github,
                                            }
                                        );
                                    }}
                                >
                                    <Container>
                                        <TextName>
                                            {this.state.devs[index].name}
                                        </TextName>
                                        <TextBio>
                                            {this.state.devs[index].bio}
                                        </TextBio>
                                        <TextTechs>
                                            {this.state.devs[index].techs}
                                        </TextTechs>
                                    </Container>
                                </Callout>
                            </Marker>
                        ))}
                    </MapView>
                ) : null}

                <Form>
                    <InputForm
                        placeholder="Insira as tecnologias"
                        placeholderTextColor={'#909090'}
                        autoCapitalize="words"
                        autoCorrect={false}
                        value={this.state.techs}
                        onChangeText={e => this.handlerInputChange(e)}
                    ></InputForm>
                    <Btn onPress={this.loadDevs}>
                        <Icon
                            style={styles.Ionicos}
                            name="search"
                            size={16}
                            color={'#fff'}
                        />
                    </Btn>
                </Form>
            </>
        );
    }
}

export default Main;
