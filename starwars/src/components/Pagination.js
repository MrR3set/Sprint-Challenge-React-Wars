import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = (props) => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" onClick={props.prev}/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" onClick={props.next}/>
      </PaginationItem>
    </Pagination>
  );
}

export default Example;