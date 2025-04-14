import { Tab, Tabs, Loading, TextEllipsis, Tabbar, TabbarItem, CountDown, Button, Swipe, SwipeItem, List, PullRefresh, Icon, Grid, GridItem } from 'vant'

const components = [Tab, Tabs, Loading, TextEllipsis, Tabbar, TabbarItem, CountDown, Button, Swipe, SwipeItem, List, PullRefresh, Icon, Grid, GridItem]

function registerVantComponents(app){
    components.forEach(item => app.use(item));
}

export default registerVantComponents