import React from 'react';
import { Pane, Text, Button, Heading, majorScale, Paragraph, Link, Strong, Small, Code, Icon, Pre, UnorderedList, ListItem, TextInput, SearchInput} from 'evergreen-ui'

const style = {
    height:'100px',
    width:'150px'
}

const Product = ({name, price, description, img}) => {
    return (

    <div>

        {/* <p>Hello product {name}</p> */}
        <Pane clearFix >
            <Pane width={340} height={280} elevation={4} marginRight={10} marginTop={10} float="left" backgroundColor="white" >
                <Heading> {name} </Heading>
                <div><img style={style} src={img}></img></div>
                <Text><Strong color="skyblue"> {price} </Strong></Text> 
                <Paragraph> {description} </Paragraph>
                <Button appearance="primary" height={majorScale(4)} marginTop={20} >Purchase</Button>
            </Pane>
        </Pane>

    </div>

    )
  
}

export default Product