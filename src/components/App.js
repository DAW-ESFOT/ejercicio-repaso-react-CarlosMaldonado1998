import React, {useState, useEffect} from "react";
import { Row, Pagination, Space} from 'antd';
import CardBook from "./CardBook";
import 'antd/dist/antd.css';


function App() {

    const [books, setBooks] = useState([]);
    const [pageInfo, setPageInfo]= useState([]);
    const [url, setUrl] = useState("https://stark-spire-22280.herokuapp.com/api/books")

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
            <h1>Lista de libros</h1>
            <div>
                <Row gutter={16} >
                    {
                        books.map((book) => (
                            <CardBook
                                key={book.id}
                                book={book}/>
                            )
                        )}
                </Row>
            </div>
            <div className="space-align-block">
                <Space align="center">
                    <Pagination
                        defaultCurrent={pageInfo.current_page}
                        total={pageInfo.total}
                        onChange={handleChangeUrl}/>
                </Space>
            </div>

        </>
    );
}

export default App;
