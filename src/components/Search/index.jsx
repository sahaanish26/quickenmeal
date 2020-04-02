import React, { Component } from 'react' ;
import { Link } from 'gatsby' ;

class Search extends Component {
    state = {
        query: '',
        results: [],
    }

    render() {
        return (
            <div className='link_bold'>
                <input className='search__input'
                       type='text'
                       value={this.state.query}
                       onChange={this.search}
                       placeholder={'Search'}
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
        const results = this.getSearchResults(query)
        this.setState({ results, query })
    }
}

export default Search
