import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home.less';
import Books from '../../components/books/books';
import {
    addFavoriteBook,
    removeFavoriteBook
} from "../../stores/actions/add-favorite.action";

@connect(
    state => state,
    {
        addFavoriteBook,
        removeFavoriteBook
    }
)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: 'b49f2cc4-b349-42f2-98bf-aa6f4cc25ae8',
                    isFavarite: false
                },
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: '16d56812-cb8f-4aa6-af7c-2b5212e7d163',
                    isFavarite: false
                },
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: 'b38c6ad6-a839-477d-8084-96df875c58ee',
                    isFavarite: false
                },
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: '558e3ff5-4e55-4a3a-bed2-ffedfeec3c02',
                    isFavarite: false
                },
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: 'cc6e7d8c-096f-4e74-b555-926c06b6977b',
                    isFavarite: false
                },
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: '171f54fd-efab-4599-a91f-6896317f9978',
                    isFavarite: false
                },
                {
                    imgUrl: '/images/book1.png',
                    price: '$49.32',
                    title: '前端架构设计',
                    briefDesc: '少年引领科技,科技引领未来',
                    author: 'Michael Smith',
                    publisher: '人民邮电出版社',
                    id: 'fb89b221-9995-430a-b5f4-c2a8b7ca24ea',
                    isFavarite: false
                }
            ]
        };
        this.addFavorite = this.addFavorite.bind(this);
    }
    onSearch() {
        console.log('search');
    }
    addFavorite(book) {
        const { user, favoriteBooks } = this.props;

        let copiedBook = Object.assign({}, book);

        if (user.isLogin) {
            if (copiedBook.isFavarite) {
                this.props.removeFavoriteBook(favoriteBooks, copiedBook);
            } else {
                this.props.addFavoriteBook(favoriteBooks, copiedBook);
            }
        } else {
            this.props.history.push('/login/');
        }
    }
    render() {
        return (
            <div className="home-page">
                {/* <SearchInput onSearch={this.onSearch} /> */}
                <Books books={this.state.books} addFavorite={this.addFavorite} {...this.props} />
            </div>
        );
    }
}
export default Home;