import React from 'react';
import { Container, Card } from './styled';
import api from '../../services/api/api';
import { Link } from 'react-router-dom';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        const info = await api.get('/users');

        await this.setState({
            users: this.state.users.concat(info.data),
        });
    }

    render() {
        return (
            <Container>
                {this.state.users.map((_, index) => (
                    <Card key={this.state.users[index].id}>
                        <img src={this.state.users[index].avatar_url} />
                        <div>
                            <br />
                            <h1>{this.state.users[index].name}</h1>
                            <br />
                            <span>{this.state.users[index].techs}</span>
                            <br />
                            <br />
                            <p>{this.state.users[index].bio}</p>

                            <br />
                            <a
                                href={`https://github.com/${this.state.users[index].github}`}
                            >
                                Acessar github
                            </a>
                        </div>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default List;
