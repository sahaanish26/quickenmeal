import React, { Component } from 'react' ;
import { Link } from 'gatsby' ;
import "./Search.scss" ;
import{
    FormControl,
    Button,
    ListGroup,
    ListGroupItem,
    FormGroup,
    FormLabel,
    Col,
    Table,
    InputGroup
} from 'react-bootstrap';
import {Badge} from "react-md";
import { Form, Input, SearchIcon } from './styles'





class Search extends Component {

    state = {
        query: '',
        results: []
    }

    /*render() {
        return (
            <div className='search'>
                <SearchIconTag />
                <input className='run'
                       type='text'
                       value={this.state.query}
                       onChange={this.search}
                       placeholder='Search'
                />
                <ul className='search__list'>
                    {this.state.results.map((post) => (
                        <li key={post.url}>
                            <Link className='search__list_white search__list_non-decoration'
                                  to={post.url}>
                                {post.title}
                            </Link>
                        </li>
                    )
                    )}
                </ul>
            </div>
        )
    }*/

    render() {
        return (

            <div className="searchForm">
                <Form>
                <Input
                    type="text"
                    placeholder="Search for Recipes here"
                    aria-label="Search"
                    onChange={this.search}
                    // iOS Safari doesn't blur input automatically on tap outside.
                    onMouseLeave={e => e.target.blur()}

                />
                <SearchIcon />
                </Form>
                <ListGroup variant="flush" className="searchResults">
                    {this.state.results.map(post => (
                        <ListGroup.Item variant="success">
                            <li key={post.id}>
                                <Link to={post.url}>{post.title}</Link>
                            </li>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

            </div>
        )
    }

   getSearchResults(query) {
       console.log("getSearchResults");
        if (!query || !window.__LUNR__) return []
        const results = window.__LUNR__.en.index.search(query)
       console.log(results);
       const posts = results.map(({ ref }) => window.__LUNR__.en.store[ref]);
       console.log(posts);
       return results.map(({ ref }) => window.__LUNR__.en.store[ref])



    }

    search = event => {
        const query = event.target.value
        console.log(query);
        const results = this.getSearchResults(query)
        this.setState({ results, query })
    }
}

export default Search
