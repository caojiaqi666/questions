/**
 * 组件入口
 */
import React, { ReactNode, useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
// 导入样式
import './style/index.less';

// 属性类型
interface IProps {
  style?: React.CSSProperties;
  className?: string;
  /**
   * @description 分隔符自定义
   * @title 分隔符
   * @default /
   */
  separator?: ReactNode;
  /**
   * @description 是否显示
   * @title 是否显示
   * @default true
   */
  show?: boolean;
}

interface IRoutes {
  key: string;
  path: string;
  title: string;
  bread?: IBreadInfo;
  children?: IRoutes[];
}

interface IBreadInfo {
  breadcrumbItem: string[];
  to: string;
}

const routes: IRoutes[] = [
  {
    key: "home",
    path: "/home",
    title: "首页",
  },
  {
    key: "history",
    path: "/history",
    title: "历史绩效",
    children: [
      {
        key: "myHistory",
        path: "/history/myHistory",
        title: "我的历史绩效",
      },
      {
        key: "myTeamHistory",
        path: "/history/myTeamHistory",
        title: "我团队历史绩效",
      },
      {
        key: "partnerTeamHistory",
        path: "/history/partnerTeamHistory",
        title: "我搭档团队历史绩效",
      },
    ],
  },
  {
    key: "backstage",
    path: "/backstage",
    title: "绩效后台配置",
    children: [
      {
        key: "backstageList",
        path: "/backstage/backstageList",
        title: "模版管理",
      },
      {
        key: "backstageDes",
        path: "/backstageList/backstageDes",
        title: "模版管理详情",
      },
    ],
  },
  {
    key: "backstage",
    path: "/backstage",
    title: "绩效后台配置",
    children: [
      {
        key: "backstageList",
        path: "/backstage/backstageList",
        title: "模版管理",
      },
      {
        key: "backstageDes",
        path: "/backstageList/backstageDes",
        title: "模版管理详情",
      },
    ],
  },
  {
    key: "target",
    path: "/target",
    title: "目标管理",
    children: [
      {
        key: "myTarget",
        path: "/target/myTarget",
        title: "我的目标",
      },
      {
        key: "subordinateTarget",
        path: "/target/subordinateTarget",
        title: "下属目标",
      },
      {
        key: "otherTarget",
        path: "/target/otherTarget",
        title: "他人目标",
      },
      {
        key: "partnerTeamTarget",
        path: "/target/partnerTeamTarget",
        title: "搭档团队目标",
      },
    ],
  },
];



// 导出组件
export default (props: IProps) => {
  const { className, style, separator, show = true, ...restProps } = props;
  const [nowBreadInfo, setNowBreadInfo] = useState<string[]>([]); /** 当前路由面包屑 */

  const breadcrumbArr: IBreadInfo[] = []; /** 所有面包屑路径 * /

  /** 获取所有面包屑路径 */
  const binaryArrayPaths = (routes: IRoutes[], path: string[]): IBreadInfo[] => {
    routes.forEach((route) => {
      route.bread = {
        to: route.path,
        breadcrumbItem: [...path, route.title]
      };

      breadcrumbArr.push(route.bread);
      if (route.children && route.children?.length) {
        binaryArrayPaths(route.children, route.bread.breadcrumbItem);
      }
    });
    return breadcrumbArr;
  };

  useEffect(() => {
    // 初始化
    const pathname: string = location.pathname;
    const binaryArray = binaryArrayPaths(routes, []);
    const res = binaryArray.filter((item) => item.to === pathname)?.[0];
    res && setNowBreadInfo(res?.breadcrumbItem);
  }, [])

  return (
    show ? 
      <div 
        className={`${className}`}
        style={style}
      >
        <Breadcrumb 
          separator={separator}
        >
          {nowBreadInfo.map((item, index) =>
            <Breadcrumb.Item key={index}>
              {item}
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
      </div> 
    : null
  )
};
