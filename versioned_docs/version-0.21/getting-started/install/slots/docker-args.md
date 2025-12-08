:::tip
r2dbc的数据库配置，和flyway的数据库配置，需要连同一个数据库，这意味着ip和端口和用户名密码都必须相同！！！
:::

| 参数名                                         | 是否必须 | 描述                                                                             |
| ---------------------------------------------- | ---| -------------------------------------------------------------------------------- |
| `spring.r2dbc.url`                            | 是 | 数据库连接地址，详细可查阅下方的 `数据库配置`                                    |
| `spring.r2dbc.username`                       | 是 | 数据库用户名                                                                     |
| `spring.r2dbc.password`                       | 是 | 数据库密码                                                                       |
| `spring.sql.init.platform`                    | 是 | 数据库平台名称，支持 `postgresql`、`h2` |
| `spring.flyway.url`                          | 是 | flyway数据库链接地址，详细可查阅下方的 `数据库配置`    |
| `spring.flyway.user`                          | 是 | 数据库用户名，与`spring.r2dbc.username`的值相同    |
| `spring.flyway.password`                     | 是 | 数据库密码，与`spring.r2dbc.password`的值相同    |
| `ikaros.security.initializer.master-username` | 否| 初始超级管理员用户名, 默认 `tomoki`                                                 |
| `ikaros.security.initializer.master-password` | 否| 初始超级管理员密码, 第一次运行程序打印在控日志里                                     |
| `ikaros.external-url` | 否 | 外部访问地址，需要根据自己的情况进行修改，影响的功能包括不限于API文档等，比如: https://demo.ikaros.run           |
| `ikaros.security.expiry.access-token-day` | 否 | `AccessToken`有效期，单位天，默认3天过期           |
| `ikaros.security.expiry.refresh-token-month` | 否 | `RefreshToken`有效期，单位月，默认3个月过期           |

数据库配置：

| 链接方式    | 链接地址格式                                                                       | `spring.sql.init.platform` |
| ----------- | ---------------------------------------------------------------------------------- | -------------------------- |
| R2dbc PostgreSQL  | `r2dbc:pool:postgresql://{HOST}:{PORT}/{DATABASE}`                                 | postgresql                 |
| R2dbc H2 Database | `r2dbc:h2:file:///${ikaros.work-dir}/db/ikaros?MODE=MySQL&DB_CLOSE_ON_EXIT=FALSE`  | h2                         |
| Flyway PostgreSQL | `jdbc:postgresql://{HOST}:{PORT}/{DATABASE}`  | postgresql                         |
| Flyway H2 Database | `jdbc:h2:file:${ikaros.work-dir}/database/ikaros`  | h2                         |

链接地址格式内的以下部分需要替换：

- `{HOST}`: 你的数据库连接配置的地址，域名或者IP
- `{PORT}`：你的数据库连接配置的端口
- `{DATABASE}`: 你的数据库名称