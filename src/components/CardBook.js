import React, {useState} from "react";
import {Card, Col, Modal, Row, Button, Image,  Space, Typography} from 'antd';
import BookDetails from "./BookDetails";
import 'antd/dist/antd.css';
const { Title, Text } = Typography;

function CardBook(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Col  xs={24} sm={16} md={12} lg={8} span={8} >
                <Card
                    hoverable
                    style={{ width: 400 , height: 250, margin: 5}}
                >
                    <Row >
                        <Col span={10} align={"left"}>
                            <Image
                                width={130}
                                src={ props.book.back_cover }
                            />
                        </Col>
                        <Col span={12} align={"left"}>
                            <Space direction="vertical">
                                <Title level={5}>{ props.book.title }</Title>
                                <Text>{ props.book.author } - { props.book.year_edition } </Text>
                                <Text>Price : ${ props.book.price } </Text>
                            </Space>
                        </Col>
                    </Row>
                    <div align={"right"}>
                        <Space align="baseline">
                            <Button
                                type="primary" shape="round"
                                onClick={()=>showModal()}>
                                view Details
                            </Button>
                        </Space>
                    </div>
                </Card>
            </Col>

            <Modal
                title="Detalles del libro"
                visible={isModalVisible}
                onCancel={ handleCancel }
                width={750}
                footer={null}>
                <BookDetails book = {props.book}
                             onCancel = {handleCancel}/>
            </Modal>
        </>
    );
}

export default CardBook;
