import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Center } from '../styles';

function Cards({ Title, Text, Url }) {
    return (
        <Center>
            <Card style={{ width: '100%', background: '#D9D9D9' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Text}
                    </Card.Text>
                    <Button variant="dark">Check</Button>
                </Card.Body>
            </Card>
        </Center>
    );
}

export default Cards;