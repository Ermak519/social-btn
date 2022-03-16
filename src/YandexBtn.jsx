import { useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

const YandexBtn = () => {
      const handleRedirect = () => {
        window.location.href = `https://oauth.yandex.ru/authorize?response_type=token&client_id=824329c3c4d241bc987b77de6090da9c`;
      };

      const getUser = async(token) => {
        const host = 'https://login.yandex.ru/info?'
        const {data} = await axios.get(`${host}oauth_token=${token}`);
        return data
      }

      useEffect(()=>{
        const yandexCode = queryString.parse(window.location.hash).access_token;
        if (yandexCode) {
          getUser(yandexCode).then((data) => { localStorage.setItem('userYandex', JSON.stringify(data)) })
        }
      }, [])

  return (
    <button style={{background: 'none', border: 'none'}} onClick={handleRedirect}>
        <img
        src='https://yastatic.net/s3/home-static/_/37/37a02b5dc7a51abac55d8a5b6c865f0e.png'
        alt="vk logo"
        style={{width: 40, height: 40, cursor: "pointer", borderRadius: '50%'}}
        />
    </button>
)
}

export default YandexBtn;