import React, { Fragment } from 'react';
import ItemcardInfo from './itemCardInfo/itemcardinfo'


class ItemCard extends React.Component{
    constructor(){
        super();

        this.state={
             data : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response =>{ this.setState({
            data:response
        });
        console.log(response)
    }
        )
    }

    render(){
        return(
            <Fragment>
                {
                    this.state.data.map(({id,title}) => 
                        <ItemcardInfo key={id} title={title}></ItemcardInfo>
                    )
                }
            </Fragment>
        )
    }

}

export default ItemCard;