import { useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

const VkBtn = () => {
      const handleRedirect = () => {
        window.location.href = `https://oauth.vk.com/authorize?client_id=8103808&display=popup&redirect_uri=http://localhost:3000&scope=email&response_type=code&v=5.120`;
      };

      const sendCode = async (code) => {
        const host = 'http://localhost:3000'
        const {data} = await axios.post(`${host}`, {data: {
            code
        }});
        return data
      }

      useEffect(()=>{
          const vkCode = queryString.parse(window.location.search).code
          if(vkCode) {
            sendCode(vkCode).then((data)=>{
                localStorage.setItem('userVk', JSON.stringify(data))
            })
          }
      }, [])

  return (
    <button style={{background: 'none', border: 'none'}} onClick={handleRedirect}>
        <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png'
        alt="vk logo"
        style={{width: 40, height: 40, cursor: "pointer", borderRadius: '50%'}}
        />
    </button>
)
}

export default VkBtn;