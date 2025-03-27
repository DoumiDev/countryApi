import React from 'react';

const ListVoyages = (props) =>{
    return(
      <div>
        {props.lists.map((list) =>
            <list key={list.id}
            id={list.id}
            source= {list.source}
            intitule={list.intitule}
            prix={list.prix}/>
        )}
      </div>
      
    );
}
export default ListVoyages;


