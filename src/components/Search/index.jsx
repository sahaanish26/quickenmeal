import React, { Component } from 'react' ;
import { Link } from 'gatsby' ;
import "./Search.scss" ;
import{ListGroup} from 'react-bootstrap';
import { Form, Input, SearchIcon,HitsWrapper,Root,ClearIcon } from './styles'





class Search extends Component {

    state = {
        query: '',
        results: [],
        clear:false
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
                <Root>
                <Form>
                    <SearchIcon />
                <Input
                    ref="searchTextHolder"
                    type="text"
                    placeholder="Search for Recipes here"
                    aria-label="Search"
                    onChange={this.search}
                    // iOS Safari doesn't blur input automatically on tap outside.
                    onMouseLeave={e => e.target.blur()}

                />
                <ClearIcon show={this.state.clear || this.state.query!=''} onClick={this.erase}/>
                </Form>
                {/*<ListGroup variant="flush" className="searchResults">
                    {this.state.results.map(post => (
                        <ListGroup.Item variant="success">
                            <li key={post.id}>
                                <Link to={post.url}>{post.title}</Link>
                            </li>
                        </ListGroup.Item>
                    ))}
                </ListGroup>*/}
                <HitsWrapper show={this.state.query.length > 0 }>
                            <header>
                                <h3>Recipes</h3>
                                <div>{this.state.results.length} result{this.state.results.length > 1 ? `s` : ``} found
                                         {this.state.results.length == 0 ?  '  for   ' + this.state.query : ``}</div>
                            </header>
                    {this.state.results.map(post => (
                        <ListGroup.Item variant="success">
                            <div>
                            <li key={post.id}>
                                <Link to={post.url}>

                                        {post.title}

                                </Link>
                            </li>
                            </div>
                        </ListGroup.Item>
                    ))}
                </HitsWrapper>
                </Root>
            </div>

        )
    }

   getSearchResults(query) {
        if (!query || !window.__LUNR__) return []
        const results = window.__LUNR__.en.index.search(query)
       return results.map(({ ref }) => window.__LUNR__.en.store[ref])
    }
  /* Method to search*/
    search = event => {
        const clear =true
        const query = event.target.value
        const results = this.getSearchResults(query)
        this.setState({ results, query,clear })
    }
   /* Method to clean the search box on click of clear*/

    erase = event => {
        const clear =false
        const query=''
        this.refs.searchTextHolder.value = '';
        this.setState({ query,clear })
    }
}

export default Search
