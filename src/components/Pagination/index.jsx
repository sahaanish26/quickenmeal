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
                        ← Previous Page
                    </Link>
                )}
                {Array.from({ length: numberOfPages }, (_, i) => (

                    <Link key={`pagination-number${i+1}`} to={`${basePath}${i === 0 ? "" : i+1 }`}>
                        {/*<Avatar iconSized >{i+1}</Avatar>*/}
                        <Button  flat secondary  swapTheming={currentPage === i+1} style={{ fontWeight: currentPage === i+1 ? 'bold' : null }}>{i+1}</Button>
                    </Link>
                    /*              <Link key={`pagination-number${i+1}`} to={`${tagBasePath}${i === 0 ? "" : i+1 }`}>
                                    {i+1}
                                  </Link>*/
                ))}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page →
                    </Link>
                )}
                </PaginationWrapper>
            </div>
        );
    }
}

export default Pagination;