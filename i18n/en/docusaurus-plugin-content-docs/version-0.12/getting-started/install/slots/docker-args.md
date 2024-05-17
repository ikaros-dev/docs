| Parameter Name                                | Description                                                           |
| --------------------------------------------- | --------------------------------------------------------------------- |
| `spring.r2dbc.url`                            | Database connection URL, see `Database Configuration` below for details |
| `spring.r2dbc.username`                       | Database username                                                     |
| `spring.r2dbc.password`                       | Database password                                                     |
| `spring.sql.init.platform`                    | Database platform name, supports `postgresql`, `h2`                   |
| `ikaros.security.initializer.master-username` | Initial superuser username, default `tomoki`                                             |
| `ikaros.security.initializer.master-password` | Initial superuser password, the first run of the program is printed in the log.                                             |

Database Configuration:

| Connection Method | Connection Address Format                                                                       | `spring.sql.init.platform` |
| ----------------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| PostgreSQL        | `r2dbc:pool:postgresql://{HOST}:{PORT}/{DATABASE}`                                             | postgresql                 |
| H2 Database       | `r2dbc:h2:file:///${ikaros.work-dir}/db/ikaros?MODE=MySQL&DB_CLOSE_ON_EXIT=FALSE`            | h2                         |
