import React, { useMemo } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const Results = () => {
    const results = useSelector(state => state.results)

    const wordsList = useMemo(() => {
        return (
            results.map((text, index) => <FormControl className='resultsText' key={index} type='text' readOnly={true} value={text} />)
        )
    }, [results])

    return (
        <Container className='resultsContainer'>
            <Row >
                <Col lg={3}>
                <h1 className='resultsTitle'>Results:</h1>
                </Col>
            </Row >
            <Row >
                <Col lg={6} style={{ margin: 'auto'}}>
                    {wordsList}
                </Col>
            </Row>
        </Container>
    )
}

export default Results;