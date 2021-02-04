import React, {useState, useEffect} from "react";
import { Col, Image, Row, Typography, Button, Space} from 'antd';
import 'antd/dist/antd.css';
const { Title, Text } = Typography;

function BookDetails(props) {


    return (
        <>
            <Row gutter={16} type="flex" style={{alignItems: 'center'}}>
                <Col xs={24} sm={24} md={12} lg={12} span={12}  >
                    <Space direction="vertical">
                        <Title level={4}>{props.book.title}</Title>
                        <Text>{props.book.author} - {props.book.year_edition} </Text>
                        <Text>Price : ${props.book.price} </Text>
                        <Text>Synopsis </Text>
                        <Text>{props.book.synopsis} </Text>
                        <Text>Disponible :  {
                            props.book.available
                                ? ' Sí'
                                : ' No'
                        }</Text>
                        <Text>Categoria : { props.book.category} </Text>
                    </Space>
                </Col>
                <Col  xs={24} sm={24} md={12} lg={12} span={12}>
                    <Image
                        src={props.book.back_cover}
                    />
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
