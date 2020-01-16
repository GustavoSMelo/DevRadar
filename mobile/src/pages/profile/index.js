import React from 'react';
import WebView from 'react-native-webview';

class Profile extends React.Component {
    render() {
        return (
            <>
                <WebView
                    style={{ flex: 1 }}
                    source={{
                        uri: `https://github.com/${this.props.navigation.state.params.name}`,
                    }}
                ></WebView>
            </>
        );
    }
}

export default Profile;
