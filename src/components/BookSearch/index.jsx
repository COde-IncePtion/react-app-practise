import { useEffect, useState, useRef } from 'react'
import './booksSearchStyle.css'

const ITEM_HEIGHT = 40
const VIEWPORT_HEIGHT = 400
const BUFFER = 1

const useVirtualization = (scrolledSoFar) => {
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    console.log('scroll =', scrolledSoFar)

    setStartIndex(Math.max(0, Math.floor(scrolledSoFar / ITEM_HEIGHT) - BUFFER))
  }, [scrolledSoFar])

  return {
    startIndex: startIndex,
    endIndex: (startIndex + Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT) + BUFFER * 10)
  }
}

const useBookSearch = ({ query, pageNumber }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('query sent to server =', query)
    const abortController = new AbortController()

    setLoading(true)

    fetch(`http://openlibrary.org/search.json?q=${query}&page=${pageNumber}&limit=30`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        console.log('testing = ', res.docs)
        setBooks(prev => [...prev, ...(res.docs ?? [])])
        setLoading(false)
      }).catch((err) => console.log('call aborted', err))

    return () => {
      abortController.abort('query changed')
      setLoading(false)
    }

  }, [query, pageNumber])

  return { books, loading }
}

const BookSearch = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const [scrolledSoFar, setScrolledSoFar] = useState(0)

  const { startIndex, endIndex } = useVirtualization(scrolledSoFar)

  console.log('startIndex, endIndex = ', startIndex, endIndex)

  const { books, loading } = useBookSearch({ query, pageNumber })
  const loadingRef = useRef(null)

  useEffect(() => {
    if (loadingRef.current === null) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      console.log('observer entries ', entries[0])

      if (entries.length > 0 && entries[0].isIntersecting) {
        setPageNumber(prev => prev + 1)
      }
    })

    observer.observe(loadingRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleScroll = (e) => {
    // console.log('scroll =', e.target.scrollTop);
    setScrolledSoFar(e.target.scrollTop)
  }

  return <div className="book-search-container"><h1>Book Search</h1>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    <div className="search-results-container" onScroll={handleScroll}>
      <div style={{ position: 'relative', height: `${books.length * ITEM_HEIGHT}px` }}>
        <div className="search-results-display-section"
             style={{ transform: `translateY(${startIndex * ITEM_HEIGHT}px)` }}>
          {books.slice(startIndex, endIndex).map((book) => (
            <div className="search-result-item" key={book.cover_edition_key}>{book.title}</div>))}
          <div ref={loadingRef}>{loading && 'Loading...'}</div>
        </div>
      </div>
    </div>
  </div>
}


export default BookSearch