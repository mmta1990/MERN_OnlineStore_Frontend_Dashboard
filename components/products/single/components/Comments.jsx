import React from 'react'

export default function Comments ({ list }) {
  return (
<div
  className="tab-pane fade single-post active show"
  id="frontend"
  role="tabpanel"
  aria-labelledby="frontend-tab"
>
  <div className="comments">
    <ul>
            {list.map(comment => (

              <li key={comment.id} className="comment ">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author">
                      <img alt src={comment.user.avatar} className />
                      <b className="fn">
                        <a href="#" rel="external nofollow" className="url">
                          {`${comment.user.firstName} ${comment.user.lastName}`}
                        </a>
                      </b>
                      <span className="says">گفته:</span>
                    </div>
                    {/* .comment-author */}
                    <div className="comment-metadata">
                      <a href="#">
                    <time dateTime="2018-09-02T12:17:07+00:00">{comment.createdAt}</time>
                      </a>
                    </div>
                    {/* .comment-metadata */}
                  </footer>
                  {/* .comment-meta */}
                  <div className="comment-content">
                    <p>
                    {comment.body}
                    </p>
                  </div>

                </article>
                {/* .comment-body */}
              </li>

            ))}
      {/* #comment-## */}
      {/* #comment-## */}
    </ul>
  </div>
  <a href="javascript:;" className="btn btn-theme">
    یک بررسی اضافه کنید
  </a>
</div>
  )
}
