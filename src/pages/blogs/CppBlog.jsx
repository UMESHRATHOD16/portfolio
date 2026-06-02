import { useState } from 'react'
import PageTurn from '../../components/PageTurn'
import './Blog.css'

function CppBlog() {
  const [goBack, setGoBack] = useState(false)

  return (
    <>
      {goBack && (
        <PageTurn to="/" chapter="第00話" title="MAIN PAGE" />
      )}
      <div className="blog-page">

        <button className="back-btn" onClick={() => setGoBack(true)}>← BACK</button>

        <div className="blog-chapter-num">第05話 · BLOG 01</div>
        <h1 className="blog-chapter-title">I Broke C++ Memory On Purpose —<br/>Here's What Happened</h1>
        <div className="blog-divider" />

        <div className="blog-meta-row">
          <span className="blog-meta-date">May 3, 2026</span>
          <span className="blog-meta-read">2 min read</span>
          <span className="blog-meta-tag">C++ · Memory · DSA</span>
        </div>

        <div className="blog-body">

          <p className="blog-p">
            Most people learn C++ memory management by reading about it.
            I learned it by breaking it on purpose and watching everything fall apart.
          </p>

          <p className="blog-quote">
            "What actually happens when you corrupt memory in C++?<br/>
            Spoiler: it gets weird. Really weird."
          </p>

          <p className="blog-p">
            This blog is a breakdown of what I tried, what broke, what I learned — and why understanding memory at this level makes you a better developer regardless of what language you use.
          </p>

          <div className="blog-cta-section">
            <p className="blog-cta-text">Read the full article on Hashnode</p>
            <a
              href="https://umeshblog1.hashnode.dev/"
              target="_blank"
              className="blog-cta"
            >
              Read Full Article ↗
            </a>
          </div>

        </div>

        <div className="blog-end">— 第05話 · END —</div>

      </div>
    </>
  )
}

export default CppBlog