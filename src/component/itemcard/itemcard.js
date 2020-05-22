import React, { Fragment } from 'react';
import ItemcardInfo from './itemCardInfo/itemcardinfo'


class ItemCard extends React.Component{
    constructor(props){
        super(props);

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

    applyJob(id) {
        alert(id)
    }

    render(){
        return(
            <Fragment>
                {
                    this.state.data.map((data) => 
                        <ItemcardInfo key={data.id} data={data} applyJob={ () => this.applyJob(data.id)}></ItemcardInfo>
                    )
                }
            </Fragment>
        )
    }

}

export default ItemCard;