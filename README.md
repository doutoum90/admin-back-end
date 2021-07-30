nest g mo products && nest g co products && nest g s products


npm install --save @nestjs/typeorm typeorm mysql



brew install mysql

brew services start mysql ou mysql.server start
mysql_secure_installation

brew services stop mysql ou mysql.server stop
mysql -u root -p



select host, user, password_expired, password_last_changed, password_lifetime from mysql.user;