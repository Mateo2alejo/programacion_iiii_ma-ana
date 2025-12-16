//import ButtonCounter from './components/ButtonCounter';
//import ColorBox from './components/ColorBox';
//import ConditionalText from './components/ConditionalText';
//import EmojiList from './components/EmojiList';
//import HelloWorld from './components/HelloWorld';
//import ShowDate from './components/ShowDate';
//import SimpleForm from './components/SimpleForm';
//import SumaForm from './components/SumaForm';
//import TextInput from './components/TextInput';
//import ToggleMessage from './components/ToggleMessage';
//import WelcomeUser from './components/WelcomeUser';
//import PromedioTresNotas from './components/PromedioTresNotas';
//import Greeting from './props/Greeting';
//import UserCard from './props/UserCard';
//import ParentButtonOne from './props/ParentButtonOne';
//
//function App() {
//
//  const userData = {
//    name: "Francisco",
//    age: 25,
//    email: "francisco@example.com"
//  };
//
//  return (
//    <>
//      <HelloWorld />
//      <WelcomeUser />
//      <ButtonCounter />
//      <TextInput />
//      <ToggleMessage />
//      <ShowDate />
//      <ColorBox />
//      <ConditionalText />
//      <EmojiList />
//      <SimpleForm />
//      <SumaForm />
//      <PromedioTresNotas />
//      <Greeting name="Francisco" />
//      <Greeting name="Ana" />
//      <UserCard user={userData} />
//      <ParentButtonOne />
//    </>
//  );
//}
//
//
//
//export default App;




import FetchUser from "./useEffect/FetchUser";
import LogEffect from "./useEffect/LogEffect";
import ScrollLogger from "./useEffect/ScrollLoger";
import CirculoColorido from "./useRef/CirculoColorido";
import ScrollDemo from "./useRef/ScrollDemo";
import AccessWithLimit from "./useState/AccesWithLimit";
import CheckboxSummary from "./useState/CheckboxSummary";
import ClickHistory from "./useState/ClickHistory";
import DocumentTitleChanger from "./useState/DocumentTitleChanger";
import DynamicColor from "./useState/DynamicColor";
import Hoverfont from "./useState/Hoverfont";
import LanguageSwitcher from "./useState/LanguageSwitcher";
import LoginWithLimit from "./useState/LoginWithLimit";
import MultiSwitch from "./useState/MultiSwitch";
import PostLikes from "./useState/PostLikes";
import ReproductorSonido from "./useRef/ReproductorSonido";
import MoverCaja from "./useRef/MoverCaja";

function App () {
  return (
    <>

    <HoverFont />
    <AccessWithLimit />
    <LoginWithLimit />
    <DocumentTitleChanger />
    <PostLikes />
    <CheckboxSummary />
    <LanguageSwitcher />
    <MultiSwitch />
    <DynamicColor />
    <ClickHistory />
    <LogEffect />
    <FetchUser />
    <ScrollLogger />
    <CirculoColorido />
    <ScrollDemo />
    <ReproductorSonido/>
    <MoverCaja />
    
    </>
  )
}

export default App;