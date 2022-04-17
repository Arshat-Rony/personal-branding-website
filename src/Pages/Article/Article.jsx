import React from 'react';
import "./Article.css"
const Article = (props) => {
    const { name, picture } = props.article;
    const { index } = props;
    return (
        <div className='article card border-0 text-end'>
            <img className={index === 0 || index === 2 ? "img rounded-3" : 'rounded-3'} src={picture} alt="" />
            <div className='text-start mt-4'>
                <p>{
                    index === 0 && <p>20 july 2020</p>
                }
                    {
                        index === 1 && <p>19 March 2019</p>
                    }

                    {
                        index === 2 && <p>10 March 2021</p>
                    }</p>
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Article;