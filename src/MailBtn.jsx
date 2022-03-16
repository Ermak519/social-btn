import { useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

const MailBtn = () => {
      const handleRedirect = () => {
        window.location.href = `https://oauth.vk.com/authorize?client_id=8103808&display=popup&redirect_uri=http://localhost:3000&scope=email&response_type=code&v=5.120`;
      };

    // отправка кода на сервер и получение данных о пользователе      
      const sendCode = async(code) => {
        const host = 'http://localhost:3000'
        const {data} = await axios.post(`${host}`, {data: {
            code
        }});
        return data
      }

      useEffect(()=>{
          const vkCode = queryString.parse(window.location.search).code
          if(vkCode) {
            const user = sendCode(vkCode)
            localStorage.setItem('userVk', JSON.stringify(user))
          }
      }, [])

  return (
    <button style={{background: 'none', border: 'none'}} onClick={handleRedirect}>
        <img
        src='https://limg.imgsmail.ru/splash/v/i/share-fp-a2954bf3df.png'
        alt="mail login"
        style={{width: 40, height: 40, cursor: "pointer", borderRadius: '50%'}}
        />
    </button>
)
}

export default MailBtn;