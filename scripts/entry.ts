// entry file

// import component and export

// import component
import { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import BadgePlugin, { Badge } from '../src/badge'
import CardPlugin, { Card } from '../src/card'
import DropdownPlugin, { Dropdown } from '../src/dropdown'
import IconPlugin, { Icon } from '../src/icon'
import ModalPlugin, { Modal } from '../src/modal'
import PaginationPlugin, { Pagination } from '../src/pagination'
import SkeletonPlugin, { Skeleton } from '../src/skeleton'
import TabPlugin, { Tab } from '../src/tab'
import TagPlugin, { Tag } from '../src/tag'
import DrawerPlugin, { Drawer } from '../src/drawer'

// export component
export {
  Button,
  Badge,
  Card,
  Dropdown,
  Icon,
  Modal,
  Pagination,
  Skeleton,
  Tab,
  Tag,
  Drawer
}

// export plugin
const installs = [
  ButtonPlugin,
  BadgePlugin,
  CardPlugin,
  DropdownPlugin,
  IconPlugin,
  ModalPlugin,
  PaginationPlugin,
  SkeletonPlugin,
  TabPlugin,
  TagPlugin,
  DrawerPlugin
]
export default {
  install(app: App) {
    installs.forEach(p => app.use(p))
  }
}
