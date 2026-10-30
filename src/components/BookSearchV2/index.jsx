import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import './booksSearchStyle.css';

function debounce(fn, wait) {
  let timerId = null;
  console.log('inside debounce$$$$');

  return function (...params) {
    if (timerId) {
      clearTimeout(timerId);
    }
    console.log('debounced!!!!');
    timerId = setTimeout(() => fn.call(this, ...params), wait);
  };
}

function throttle(fn, wait) {
  let timerId = null;

  return function throttled(...params) {
    if (timerId) {
      console.log('throttled!!!!');
      return;
    }

    if (timerId === null) {
      fn.call(this, ...params);
      timerId = setTimeout(() => {
        clearTimeout(timerId);
        timerId = null;
      }, wait);
    }
  };
}

const Child = () => {
  useEffect(() => {
    console.log('Child completed rendering');
  }, []);

  return (
    <div>
      <h2>Child</h2>
    </div>
  );
};

const useBookSearchV2 = (query, pageNumber, pageSize) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchBooks = async abortSignal => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${query}&page=${pageNumber}&limit=${pageSize}`,
          { signal: abortSignal.signal }
        );

        const responseData = await response.json();

        if (!response.ok) {
          const error = new Error();
          error.status = response.status;
          error.message = responseData;
          error.body = responseData;
          throw error;
        }

        setBooks(responseData.docs);
      } catch (error) {
        console.log('error in booking fetch api call', {
          status: error.status,
          message: error.message,
          body: error.body
        });
      } finally {
        setLoading(false);
      }
    };
    const abortSignal = new AbortController();

    fetchBooks(abortSignal);

    return () => {
      abortSignal.abort('request params has been changed');
    };
  }, [query, pageNumber, pageSize]);

  return { books, loading };
};

const ITEM_HEIGHT = 40;
const BUFFER = 5;
const VIEWPORT_HEIGHT = 400;

const useVirtualization = scrolledTillNow => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const newStart = Math.max(Math.floor(scrolledTillNow / ITEM_HEIGHT) - BUFFER, 0);
    setStartIndex(newStart);
  }, [scrolledTillNow]);

  return { startIndex, endIndex: startIndex + Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT) + BUFFER };
};

const BookSearchV2 = () => {
  const [query, setQuery] = useState('');

  const [pageNumber, setPageNumber] = useState(1);
  const [booksData, setBooksData] = useState([]);
  const [scrolledTillNow, setScrolledTillNow] = useState(0);

  const debouncedSetQuery = useMemo(() => debounce(setQuery, 500), []);

  const { startIndex, endIndex } = useVirtualization(scrolledTillNow);

  // console.log('startIndex, endIndex = ', startIndex, endIndex);

  const observerRef = useRef(null);

  const { books, loading } = useBookSearchV2(query, pageNumber, 30);

  useEffect(() => {
    setBooksData(prev => prev.concat(books));
  }, [books]);

  useEffect(() => {
    if (observerRef.current === null) {
      return;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries.length > 0 && entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleOnScroll = e => {
    setScrolledTillNow(e.target.scrollTop);
    console.log('scrolled called');
  };

  const throttledHandleOnScroll = useMemo(() => throttle(handleOnScroll, 500), []);

  return (
    <div className="book-search-container">
      <h1>BookSearchV2</h1>
      <input type="text" onChange={e => debouncedSetQuery(e.target.value)} />
      <div className="search-result-container" onScroll={throttledHandleOnScroll}>
        <div style={{ position: 'relative', height: `${booksData.length * ITEM_HEIGHT}px` }}>
          <div className="search-result-section" style={{ transform: `translateY(${startIndex * ITEM_HEIGHT}px)` }}>
            {booksData.slice(startIndex, endIndex).map(book => (
              <div key={book.title} className="search-result-item1">
                <p>{book.title}</p>
              </div>
            ))}
            <div key="sentinal" className="search-result-item1" ref={observerRef}>
              {loading && 'Loading...'}
            </div>
          </div>
        </div>
      </div>
      <Child />
    </div>
  );
};

export default BookSearchV2;
