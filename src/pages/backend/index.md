# 项目介绍
antdv-boot-pro是一款基于代码生成器的低代码开发平台，零代码开发！
采用前后端分离架构：SpringBoot2.x，Ant Design&Vue，Mybatis-plus，spring security。强大的代码生成器让前后端代码一键生成，无需写任何代码!
帮助解决Java项目70%的重复工作，让开发更多关注业务逻辑。既能快速提高开发效率，帮助公司节省成本，同时又不失灵活性！

antdv-boot-pro在提高UI能力的同时，降低了前后分离的开发成本，
支持 RBAC 动态权限. 数据权限. SaaS 多租户. Flowable 工作流. 三方登录. 支付. 短信. 商城等功能。
antdv-boot-pro宗旨是:简单功能由Online Coding配置实现（在线配置表单. 在线配置报表. 在线图表设计. 在线设计流程. 在线设计表单），复杂功能由代码生成器生成进行手工Merge，既保证了智能又兼顾了灵活;
业务流程采用工作流来实现. 扩展出任务接口，供开发编写业务逻辑，表单提供多种解决方案： 表单设计器. online配置表单. 编码表单。同时实现了流程与表单的分离设计（松耦合）. 并支持任务节点灵活配置，既保证了公司流程的保密性，又减少了开发人员的工作量。

## 技术架构

### 开发环境

* 语言：Java 8+ (小于17)
* IDE(JAVA)： IDEA (必须安装lombok插件 )
* IDE(前端)： Vscode. WebStorm. IDEA
* 依赖管理：Maven 3.5.4+
* 缓存：Redis 3.0+
* 数据库脚本：MySQL5.7+ & Oracle 11g & Sqlserver2017（其他数据库，需要自己转）

### 框架

* 基础框架：Spring Boot 2.6.6
* 微服务框架： Spring Cloud Alibaba 2021.0.1.0
* 持久层框架：MybatisPlus 3.5.1
* 报表工具： JimuReport 1.5.2
* 安全框架：Apache Shiro 1.8.0，Jwt 3.11.0
* 微服务技术栈：Spring Cloud Alibaba. Nacos. Gateway. Sentinel. Skywalking
* 数据库连接池：阿里巴巴Druid 1.1.22
* 日志打印：logback
* 其他：autopoi, fastjson，poi，Swagger-ui，quartz, lombok（简化代码）等。


## 支持数据库
| 数据库           |  支持  |
|---------------|:----:|
| MySQL      | `√`  |
| Oracle11g      | `√`  |
| Sqlserver2017 | `√`  |
| PostgreSQL      | `√`  |
| MariaDB      | `√`  |
| 达梦. 人大金仓 | `√`  |

## 微服务解决方案
1. 服务注册和发现 Nacos √
2. 统一配置中心 Nacos √
3. 路由网关 gateway(三种加载方式) √
4. 分布式 http feign √
5. 熔断降级限流 Sentinel √
6. 分布式文件 Minio. 阿里OSS √
7. 统一权限控制 JWT + Shiro √
8. 服务监控 SpringBootAdmin√
9. 链路跟踪 Skywalking 参考文档
10. 消息中间件 RabbitMQ √
11. 分布式任务 xxl-job √
12. 分布式事务 Seata
13. 分布式日志 elk + kafka
14. 支持 docker-compose. k8s. jenkins
15. CAS 单点登录 √
16. 路由限流 √