import GoogleBtn from './GoogleBtn';
import VkBtn from './VkBtn';
import YandexBtn from './YandexBtn';
import MailBtn from './MailBtn';

import 'https://apis.google.com/js/platform.js?onload=init';

import './App.css';

function App() {
  return (
    <div className="App">
      <GoogleBtn />
      <YandexBtn />
      <VkBtn />
      <MailBtn />
    </div>
  );
}

export default App;
