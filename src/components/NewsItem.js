import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>
            {source}
          </span>
        </div>
        <img src={!imageUrl ? 'https://www.hindustantimes.com/ht-img/img/2023/03/15/1600x900/Breaking-News-Live-Blog-pic_1627344775185_1677800210069_1678924160405_1678924160405.jpg' : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : 'Unknown'} on {new Date(date).toUTCString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem