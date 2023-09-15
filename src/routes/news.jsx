import { useEffect,useState } from "react";
function news() {
    const [news, setNews] = useState([])
    console.log("page initialized")
   useEffect(() => {
    fetch("https://freefakeapi.io/api/posts")
      .then(res => res.json())
      .then(data =>{
        setNews(data.news);
      })
    },[]);
    return (
        <div>
          {news.map((item) => (
            <div>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.content}</p>
              <p>{item.slug}</p>
              <img src={item.picture} />
              <p>{item.user}</p>
            </div>
          ))}
        </div>
      );
    };
export default news;