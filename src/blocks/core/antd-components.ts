/**
 * deprecated
 */
import { message, Grid, notification, theme, version, App, ConfigProvider } from 'antd'
import type antd from 'antd'
import React from 'react'

const loaders = {
  Affix: () => import('antd/es/affix'),
  Anchor: () => import('antd/es/anchor'),
  AutoComplete: () => import('antd/es/auto-complete'),
  Avatar: () => import('antd/es/avatar'),
  FloatButton: () => import('antd/es/float-button'),
  BackTop: () => import('antd/es/back-top'),
  Badge: () => import('antd/es/badge'),
  Breadcrumb: () => import('antd/es/breadcrumb'),
  Button: () => import('antd/es/button'),
  Calendar: () => import('antd/es/calendar'),
  Card: () => import('antd/es/card'),
  Carousel: () => import('antd/es/carousel'),
  Cascader: () => import('antd/es/cascader'),
  Checkbox: () => import('antd/es/checkbox'),
  Col: () => import('antd/es/col'),
  Collapse: () => import('antd/es/collapse'),
  DatePicker: () => import('antd/es/date-picker'),
  Descriptions: () => import('antd/es/descriptions'),
  Divider: () => import('antd/es/divider'),
  Drawer: () => import('antd/es/drawer'),
  Dropdown: () => import('antd/es/dropdown'),
  Empty: () => import('antd/es/empty'),
  Form: () => import('antd/es/form'),
  Image: () => import('antd/es/image'),
  Input: () => import('antd/es/input'),
  InputNumber: () => import('antd/es/input-number'),
  Layout: () => import('antd/es/layout'),
  List: () => import('antd/es/list'),
  Mentions: () => import('antd/es/mentions'),
  Menu: () => import('antd/es/menu'),
  Modal: () => import('antd/es/modal'),
  Pagination: () => import('antd/es/pagination'),
  Popconfirm: () => import('antd/es/popconfirm'),
  Popover: () => import('antd/es/popover'),
  Progress: () => import('antd/es/progress'),
  Radio: () => import('antd/es/radio'),
  Rate: () => import('antd/es/rate'),
  Result: () => import('antd/es/result'),
  Row: () => import('antd/es/row'),
  Segmented: () => import('antd/es/segmented'),
  Select: () => import('antd/es/select'),
  Skeleton: () => import('antd/es/skeleton'),
  Slider: () => import('antd/es/slider'),
  Space: () => import('antd/es/space'),
  Spin: () => import('antd/es/spin'),
  Statistic: () => import('antd/es/statistic'),
  Steps: () => import('antd/es/steps'),
  Switch: () => import('antd/es/switch'),
  Table: () => import('antd/es/table'),
  Tabs: () => import('antd/es/tabs'),
  Tag: () => import('antd/es/tag'),
  TimePicker: () => import('antd/es/time-picker'),
  Timeline: () => import('antd/es/timeline'),
  Tooltip: () => import('antd/es/tooltip'),
  Tour: () => import('antd/es/tour'),
  Transfer: () => import('antd/es/transfer'),
  Tree: () => import('antd/es/tree'),
  TreeSelect: () => import('antd/es/tree-select'),
  Typography: () => import('antd/es/typography'),
  Upload: () => import('antd/es/upload'),
  Watermark: () => import('antd/es/watermark'),
  QRCode: () => import('antd/es/qrcode'),
}

export const getAntdComponents = () => {
  // TODO: 在浏览器空闲时加载loader资源
  return {
    Affix: React.lazy<(typeof antd)['Affix']>(loaders.Affix),
    Anchor: React.lazy<(typeof antd)['Anchor']>(loaders.Anchor),
    AutoComplete: React.lazy<(typeof antd)['AutoComplete']>(loaders.AutoComplete),
    Avatar: React.lazy<(typeof antd)['Avatar']>(loaders.Avatar),
    FloatButton: React.lazy<(typeof antd)['FloatButton']>(loaders.FloatButton),
    BackTop: React.lazy<(typeof antd)['BackTop']>(loaders.BackTop),
    Badge: React.lazy<(typeof antd)['Badge']>(loaders.Badge),
    Breadcrumb: React.lazy<(typeof antd)['Breadcrumb']>(loaders.Breadcrumb),
    Button: React.lazy<(typeof antd)['Button']>(loaders.Button),
    Calendar: React.lazy<(typeof antd)['Calendar']>(loaders.Calendar),
    Card: React.lazy<(typeof antd)['Card']>(loaders.Card),
    Carousel: React.lazy<(typeof antd)['Carousel']>(loaders.Carousel),
    Cascader: React.lazy<(typeof antd)['Cascader']>(loaders.Cascader),
    Checkbox: React.lazy<(typeof antd)['Checkbox']>(loaders.Checkbox),
    Col: React.lazy<(typeof antd)['Col']>(loaders.Col),
    Collapse: React.lazy<(typeof antd)['Collapse']>(loaders.Collapse),
    DatePicker: React.lazy<(typeof antd)['DatePicker']>(loaders.DatePicker),
    Descriptions: React.lazy<(typeof antd)['Descriptions']>(loaders.Descriptions),
    Divider: React.lazy<(typeof antd)['Divider']>(loaders.Divider),
    Drawer: React.lazy<(typeof antd)['Drawer']>(loaders.Drawer),
    Dropdown: React.lazy<(typeof antd)['Dropdown']>(loaders.Dropdown),
    Empty: React.lazy<(typeof antd)['Empty']>(loaders.Empty),
    Form: React.lazy<(typeof antd)['Form']>(loaders.Form),
    Image: React.lazy<(typeof antd)['Image']>(loaders.Image),
    Input: React.lazy<(typeof antd)['Input']>(loaders.Input),
    InputNumber: React.lazy<(typeof antd)['InputNumber']>(loaders.InputNumber),
    Layout: React.lazy<(typeof antd)['Layout']>(loaders.Layout),
    List: React.lazy<(typeof antd)['List']>(loaders.List),
    Mentions: React.lazy<(typeof antd)['Mentions']>(loaders.Mentions),
    Menu: React.lazy<(typeof antd)['Menu']>(loaders.Menu),
    Modal: React.lazy<(typeof antd)['Modal']>(loaders.Modal),
    Pagination: React.lazy<(typeof antd)['Pagination']>(loaders.Pagination),
    Popconfirm: React.lazy<(typeof antd)['Popconfirm']>(loaders.Popconfirm),
    Popover: React.lazy<(typeof antd)['Popover']>(loaders.Popover),
    Progress: React.lazy<(typeof antd)['Progress']>(loaders.Progress),
    Radio: React.lazy<(typeof antd)['Radio']>(loaders.Radio),
    Rate: React.lazy<(typeof antd)['Rate']>(loaders.Rate),
    Result: React.lazy<(typeof antd)['Result']>(loaders.Result),
    Row: React.lazy<(typeof antd)['Row']>(loaders.Row),
    Segmented: React.lazy<(typeof antd)['Segmented']>(loaders.Segmented),
    Select: React.lazy<(typeof antd)['Select']>(loaders.Select),
    Skeleton: React.lazy<(typeof antd)['Skeleton']>(loaders.Skeleton),
    Slider: React.lazy<(typeof antd)['Slider']>(loaders.Slider),
    Space: React.lazy<(typeof antd)['Space']>(loaders.Space),
    Spin: React.lazy<(typeof antd)['Spin']>(loaders.Spin),
    Statistic: React.lazy<(typeof antd)['Statistic']>(loaders.Statistic),
    Steps: React.lazy<(typeof antd)['Steps']>(loaders.Steps),
    Switch: React.lazy<(typeof antd)['Switch']>(loaders.Switch),
    Table: React.lazy<(typeof antd)['Table']>(loaders.Table),
    Tabs: React.lazy<(typeof antd)['Tabs']>(loaders.Tabs),
    Tag: React.lazy<(typeof antd)['Tag']>(loaders.Tag),
    TimePicker: React.lazy<(typeof antd)['TimePicker']>(loaders.TimePicker),
    Timeline: React.lazy<(typeof antd)['Timeline']>(loaders.Timeline),
    Tooltip: React.lazy<(typeof antd)['Tooltip']>(loaders.Tooltip),
    Tour: React.lazy<(typeof antd)['Tour']>(loaders.Tour),
    Transfer: React.lazy<(typeof antd)['Transfer']>(loaders.Transfer),
    Tree: React.lazy<(typeof antd)['Tree']>(loaders.Tree),
    TreeSelect: React.lazy<(typeof antd)['TreeSelect']>(loaders.TreeSelect),
    Typography: React.lazy<(typeof antd)['Typography']>(loaders.Typography),
    Upload: React.lazy<(typeof antd)['Upload']>(loaders.Upload),
    Watermark: React.lazy<(typeof antd)['Watermark']>(loaders.Watermark),
    QRCode: React.lazy<(typeof antd)['QRCode']>(loaders.QRCode),
    Grid,
    message,
    notification,
    theme,
    App,
    ConfigProvider,
    version,
  }
}
