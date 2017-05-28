import React, {DOM} from 'react';
import TextBox from './TextBox';
import Image from './Image';

class BlogItem extends React.Component {
    render() {
        const {image, description} = this.props;
        return (
            DOM.div(
                null,
                React.createElement(TextBox, {description}),
                React.createElement(Image, {
                    src: image.src,
                    alt: image.alt,
                    width: '300px',
                    height: '450px'
                })
            )
        );
    }
}

export default BlogItem;
