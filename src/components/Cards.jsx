import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Center } from '../styles';

function Cards({ Name, Pedigre, Color, Reward, City, ImgUrl }) {
    return (
        <Center style={{margin: '10px 0px'}}>
            <Card style={{ width: '100%', background: '#D9D9D9' }}>
                <Card.Img variant="top" style={{maxHeight: '320px'}} src={ImgUrl} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                        {Pedigre}
                        <br />
                        {Color}
                        <br />
                        {Reward}
                        <br />
                        {City}
                    </Card.Text>
                    <Button variant="dark">Check</Button>
                </Card.Body>
            </Card>
        </Center>
    );
}

export default Cards;