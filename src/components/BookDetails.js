import React, {useState, useEffect} from "react";
import { Col, Image, Row, Typography, Button, Space} from 'antd';
import 'antd/dist/antd.css';
const { Title, Text } = Typography;

function BookDetails(props) {

    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(
                "https://stark-spire-22280.herokuapp.com/api/books/" + props.id
            );
            const json = await response.json();
            console.log("json", json);
            setBook(json);
            return json;
        };
        console.log("Book", book);
        fetchBooks();

    }, []);

    return (
        <>
            <Row gutter={16} type="flex" style={{alignItems: 'center'}}>
                <Col xs={24} sm={24} md={12} lg={12} span={12}>
                    <Space direction="vertical">
                        <Title level={4}>{book.title}</Title>
                        <Text>{book.author} - {book.year_edition} </Text>
                        <Text>Price : ${book.price} </Text>
                        <Text>Synopsis </Text>
                        <Text>{book.synopsis} </Text>
                        <Text>Disponible :  {
                            book.available
                                ? ' Sí'
                                : ' No'
                        }</Text>
                        <Text>Categoria : { book.category} </Text>
                    </Space>
                </Col>
                <Col  xs={24} sm={24} md={8} lg={8} span={8}>
                    <Image
                        src={book.back_cover}
                    />
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} span={4} >
                    <Button type="primary" block size="large"
                            onClick={props.onCancel}>
                        Back
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default BookDetails;
