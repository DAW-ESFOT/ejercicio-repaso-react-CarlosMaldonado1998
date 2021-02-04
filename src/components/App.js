import React, {useState, useEffect} from "react";
import { Row, Pagination, Divider, Layout} from 'antd';
import CardBook from "./CardBook";
import 'antd/dist/antd.css';
import './../styles/App.css';
const { Header, Footer, Content } = Layout;



function App() {

    const [books, setBooks] = useState([]);
    const [pageInfo, setPageInfo]= useState([]);
    const [url, setUrl] = useState("http://stark-spire-22280.herokuapp.com/api/books?page=1" )

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(
                "" + url
            );
            const json = await response.json();
            console.log("json", json);
            setBooks(json.data);
            setPageInfo(json.meta)
            return json;
        };

        fetchBooks();
    }, [url] );


    const handleChangeUrl = (current) => {
        setUrl(pageInfo.links[current].url);
    }

    return (
        <>
            <Layout>
                <Header align={"center"}>
                    <h1 style={{color: "red"}}> BOOK HI </h1>
                </Header>
                <Content>
                    <Divider>List of books</Divider>
                    <div align={"center"}>
                        <Row gutter={16} >
                            {
                                books.map((book) => (
                                        <CardBook
                                            key = {book.id}
                                            book = {book}/>
                                    )
                                )}
                        </Row>
                    </div>
                </Content>
                <Footer>
                    <Divider>Pages</Divider>
                    <div align={"center"}>
                        <Pagination
                            defaultCurrent={1}
                            total={pageInfo.total}
                            onChange={handleChangeUrl}/>
                    </div>
                    <Divider>Info@bookhi.com</Divider>
                </Footer>
            </Layout>
        </>
    );
}

export default App;
