import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getBackwardWord } from '../actions/words';

const Header = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)

    const [text, setText] = useState('')

    const handleInputChange = (event) => setText(event.target.value)

    const sendRequest = () => {
        setText('')
        dispatch(getBackwardWord(text))
    }

    return (
        <Container className='header'>
            <Row>
                <Col xs={6} className='headerSubcontainer'>
                    <FormControl type="text" placeholder="Insert Text" className="mr-sm-2" value={text} onChange={handleInputChange} />
                    {loading ? <Spinner animation="border" /> : <Button className='button' onClick={sendRequest}>Send</Button>}
                </Col>
            </Row>
        </Container>
    )
}

export default Header;