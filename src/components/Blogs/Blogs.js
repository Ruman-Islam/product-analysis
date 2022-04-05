import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <>
            <div className='blog-container'>
                <h2>Context API:</h2>
                Context API helps passing data to child component without pops drilling. It is like mobile network. By wrapping context API component any data can be passed through Context API to the child components or file only. It creates a context and export to share file to another file. It provides two components Provider and Consumer wrapped by Context API component. Last, in the Provider component any dynamic or static data can pass through value. and catch from child component.
                <h2>Difference of Inline, Block, Inline-block elements:</h2>
                Inline: Inline elements sits one after along side in the same line. It takes the width as much as it needs.
                Block: Block elements takes all the width as much it can. These elements starts always in a new line.
                Inline-block: Inline-block elements are sits on in the same line but behaves like block elements.
                <h2>Semantic tags:</h2>
                Semantic tags are meaningful html tags. By reading tag we can understand the purpose of that tag. Like - section, article, main, strong, bold etc.
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        </>
    );
};

export default Blogs;