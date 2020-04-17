import React, { Component } from "react";
import {Link} from "gatsby";
import Button from "react-md/lib/Buttons";
import { PaginationWrapper} from './styles'



class Pagination extends Component {
    render() {
        const { from,basePath, numberOfPages, currentPage } = this.props;
        console.log("pagination coming for" + from);
        const isFirst = currentPage === 1;
        const isLast = currentPage === numberOfPages ;
        const prevPageSub =  currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
        const prevPage = basePath + prevPageSub ;
        const nextPage = basePath + (currentPage + 1).toString();


        return (
            <div>
                <PaginationWrapper>
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        <Button   raised primary  style={{ fontWeight: 'bold' }}>  ← Previous Page</Button>
                    </Link>
                )}
                {Array.from({ length: numberOfPages }, (_, i) => (

                    <Link key={`pagination-number${i+1}`} to={`${basePath}${i === 0 ? "" : i+1 }`}>
                        {/*<Avatar iconSized >{i+1}</Avatar>*/}
                        <Button  flat  primary={currentPage!==i+1}  secondary={currentPage===i+1} swapTheming  style={{ fontWeight: currentPage === i+1 ? 'bold' : 'bold' }}>{i+1}</Button>
                    </Link>
                    /*              <Link key={`pagination-number${i+1}`} to={`${tagBasePath}${i === 0 ? "" : i+1 }`}>
                                    {i+1}
                                  </Link>*/
                ))}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        <Button   raised primary  style={{ fontWeight: 'bold' }}>Next Page →</Button>
                    </Link>
                )}
                </PaginationWrapper>
            </div>
        );
    }
}

export default Pagination;