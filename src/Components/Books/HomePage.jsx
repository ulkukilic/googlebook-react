import { useEffect, useState } from "react";

export default function HomePage({ books}) {
    // https://stackoverflow.com/questions/78352966/react-js-api-calls-using-axios
    // const api = 'https://www.googleapis.com/books/v1/volumes?q=';
    // const [books, setBooks] = useState([]); // gelen veriler apiden burda tutulacak

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             console.log("Sayfa yuklendi ve useEffect calisti");
    //             // const response = await fetch(api + 'Pride and Prejudice'); // fetch ile api cagrisi yapiliyor
    //             const response = await fetch(api + searchQuery);
    //             const data = await response.json();
    //             console.log(data);

    //             setBooks(data.items || []); // data icerisindeki veriler books state'ine atiliyor
    //         } catch (error) {
    //             console.error("Error: ", error);
    //         }
    //     }
    //     fetchData();
    // }, [searchQuery]); // searchQuery degistiginde useEffect tekrar  calismasi icin
 // https://jsonformatter.org/
    //    "volumeInfo": {
    //     "title": "Barbie - Gwiezdna przygoda",
    //     "authors": [
    //       "Mattel"
    //     ],
    //     "publisher": "Lindhardt og Ringhof",
    //      "imageLinks": {
    //       "smallThumbnail": "http://books.google.com/books/content?id=pmxwEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //       "thumbnail": "http://books.google.com/books/content?id=pmxwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    //     },
  return (
   <div className="container mt-4">
    <h1 style={{ textAlign: 'center' }}> Google Books </h1>

    <div className="row">
        {books.length === 0 ? (  
            <div>Dont find Books</div>
        ) : (
            books.map((book) => (
                <div key={book.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                        {/* Kitap Resimleri */}
                        {book.volumeInfo.imageLinks &&(
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                className="card-img-top"
                                alt={book.volumeInfo.title}
                            />
                        )}
                        <div className="card-body">
                            <h5 className="card-title">
                                {book.volumeInfo.title || 'There is no title'}
                            </h5>
                            {book.volumeInfo.authors && (
                                <p className="card-text">
                                    {book.volumeInfo.authors|| 'There is no author'}
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            ))
        )}
    </div>
</div>

  );
}
//NOTE : useEffect kullanilmasinin sebebi fetch  js de yapildigi gibi yapildiginda tek bir 
// sefer calisip bitiyor useEffect ise onu surekli calismasini sagliyor.
// baska durumlarda calisasi isteniyorsa [counter] gibi parametreler verilebilir.
