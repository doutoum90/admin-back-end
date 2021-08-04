
## ajout de module, de controlleur et de service pour products
```console
foo@bar:~$ nest g mo products && nest g co products && nest g s products
```

## ajout de l'ORM
```console
foo@bar:~$ npm install --save @nestjs/typeorm typeorm mysql
```

## installation de mysql et demarrage en global

### install de mysql avec brew
```console
foo@bar:~$ brew install mysql
```

### demarrage de mysql
```console
foo@bar:~$ brew services start mysql 
#ou mysql.server start
```

### activation du mode sécurisé
```console
foo@bar:~$ mysql_secure_installation
```

### arrêt du service mysql
```console
foo@bar:~$ brew services stop mysql 
#ou mysql.server stop
```

### connexion en mode root.
```console
foo@bar:~$ mysql -u root -p
```

### information en mode globale
```console
foo@bar:~$ select host, user, password_expired, password_last_changed, password_lifetime from mysql.user;
```
