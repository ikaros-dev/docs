| 参数名                                         | 描述                                                                             |
| ---------------------------------------------- | -------------------------------------------------------------------------------- |
| `spring.r2dbc.url`                             | 数据库连接地址，详细可查阅下方的 `数据库配置`                                    |
| `spring.r2dbc.username`                        | 数据库用户名                                                                     |
| `spring.r2dbc.password`                        | 数据库密码                                                                       |
| `spring.sql.init.platform`                     | 数据库平台名称，支持 `postgresql`、`h2` |
| `ikaros.security.initializer.master-username` | 初始超级管理员用户名, 默认 `tomoki`                                                             |
| `ikaros.security.initializer.master-password` | 初始超级管理员密码, 第一次运行程序打印在控日志里                                                               |
| `ikaros.external-url` | 外部访问地址，需要根据自己的情况进行修改，影响的功能包括不限于API文档等，比如: https://demo.ikaros.run                                                             |

数据库配置：

| 链接方式    | 链接地址格式                                                                       | `spring.sql.init.platform` |
| ----------- | ---------------------------------------------------------------------------------- | -------------------------- |
| PostgreSQL  | `r2dbc:pool:postgresql://{HOST}:{PORT}/{DATABASE}`                                 | postgresql                 |
| H2 Database | `r2dbc:h2:file:///${ikaros.work-dir}/db/ikaros?MODE=MySQL&DB_CLOSE_ON_EXIT=FALSE`  | h2                         |
