import {translate} from '../locals/index';
import {SideMenuIcons} from '../uiKit/icons'
const sideMenuMock = [
    {
      title: translate('sideMenu.mycar'),
      icon: SideMenuIcons.mycar,
      isNew: false,
      count: 0,
    },
    {
      title:  translate('sideMenu.Search_navigation'),
      icon: SideMenuIcons.search,
      isNew: false,
      count: 0,
    },
    {
      title: translate('sideMenu.Guides&tips'),
      icon: SideMenuIcons.InfoSquarecle,
      isNew: false,
      count: 2,
    },
    {
      title: translate('sideMenu.Questions'),
      icon: SideMenuIcons.QuestionSquarecle,
      isNew: false,
      count: 0,
    },
    {
      title: translate('sideMenu.Chat'),
      icon: SideMenuIcons.IconsMessage,
      isNew: false,
      count: 0,
    },
    {
      title: translate('sideMenu.conversatio_service'),
      icon: SideMenuIcons.Headphones,
      isNew: false,
      count: 0,
    },
    {
      title: translate('sideMenu.Write_to_us'),
      icon: SideMenuIcons.MessageText,
      isNew: false,
      count: 0,
    },
  ];
  export default sideMenuMock;