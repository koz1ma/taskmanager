# provatecnica
O backend foi feito utilizando o framework cakePHP versão 2.8
O frontend foi feito utilizando o framework angularJs e twitter bootstrap, para deploy e gerenciamento de pacotes foi utilizado o Grunt e o Bower

**Devido a essa aplicação ser construída em CakePHP, algumas condições são necessárias para seu funcionamento correto:

    Habilitar o módulo "mod_rewrite" no servidor Apache.
    PHP na versão 5.5.9 ou superior.
    Possuir as extensões "mbstring" e "intl" habilitadas no PHP.


Passos para instalação do backend
1 - Criar BD de acordo com o esquema localizado na pasta backend(db.sql).

2 - Extrair a pasta para o servidor e mudar as configurações de banco de dados localizadas em cakephp/app/Config/

3 - Acessar através do endereço do servidor

4 - Para testar o funcionamento, se deve utilizar os endereços de acordo com a nomeclatura do cakePHP para APIs Rest conforme a seguir:

HTTP format 	URL format 	Controller action invoked

GET 	/tasks.json 	TasksController::index()

POST 	/tasks.json 	TasksController::add()

PUT 	/tasks/123.json 	TasksController::edit(123)

DELETE 	/tasks/123.json 	TasksController::delete(123)

Passos para instalação do frontend

1 - Copiar a pasta app na pasta www do servidor

2 - Configurar o endereço do backend no arquivo constants.js localizado dentro da pasta dentro da constante baseUrl

3 - acessar o index.html da mesma
